import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChampIcons = ({ champName }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Champion Details', { name: champName })}>
      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle} source={{uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champName}.png`}}/>
        <Text style={styles.textStyle}>{champName === 'MonkeyKing' ? 'Wukong' : champName }</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  viewStyle: {
    height: 80,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 11,
    fontWeight: 'bold',
  }
});

export default ChampIcons;