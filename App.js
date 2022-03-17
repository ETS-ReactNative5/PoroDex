// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SpellScreen from './src/screens/SpellScreen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const MyTheme = {
  colors: {
    primary: '#FFFFFF',
    background: '#181818',
    card: '#212121',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initalRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerBackVisible: false,
            title: 'PoroDex'
          }}
        />
        <Stack.Screen
          name="Champions"
          component={HomeScreen}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen
          name="Champion Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Spell"
          component={SpellScreen}
          options={({ route }) => ({ title: route.params.passive?.name ? route.params.passive.name : route.params.spells[route.params.spellIndex].name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;