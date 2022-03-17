import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SpellIcons = ({ spells, passive }) => {

  const navigation = useNavigation();

  if (!spells.length) {
    return null;
  }

  return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('Spell', { spells: spells, passive: passive })}>
          <Image style={styles.imageStyle} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/passive/${passive.image}`}}/>
        </TouchableOpacity>
        <FlatList
          horizontal
          data={spells}
          keyExtractor={(spell) => spell.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Spell', { spells: spells, currSpell: item.id, spellIndex: index })}
              >
                <Image style={styles.imageStyle} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${item.id}.png`}}/>
              </TouchableOpacity>
            )
        }}
        />
      </View>
  )
}


const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 10,
    borderWidth: 3,
    margin: 5
  },
  textStyle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
  }
});

export default SpellIcons;