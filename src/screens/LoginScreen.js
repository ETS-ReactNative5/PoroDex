import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { auth } from '../../firebase-config';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '226313071936-3sbg10vdraghrhvc08hdbqjl08t277eo.apps.googleusercontent.com'
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response])

  const getUserData = async () => {
    let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}`}
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  useEffect(() => {
    getUserData();
  }, [accessToken])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Champions")
      }
    })

    return unsubscribe;
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      {console.log(userInfo)}
      <Image style={styles.image} source={require('../../assets/poro.png')}/>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email..."
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password..."
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={accessToken ? navigation.navigate('Champions') : () => { promptAsync({showInRecents: true})}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login With Google</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 50,
    marginBottom: 75,
    borderRadius: 100,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonGoogle: {

  }
});

export default LoginScreen;