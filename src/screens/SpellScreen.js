import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SpellScreen = ({ route }) => {
  const { spells, passive, currSpell, spellIndex } = route.params;

  const renderAbility = (passive, spells, currSpell, spellIndex) => {
    if (!passive) {
      return (
        <View style={styles.spellContainer}>
          <Image style={styles.imageStyle} source={{ uri: `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${currSpell}.png`}}/>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>{spells[spellIndex].description}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.spellContainer}>
          <Image style={styles.imageStyle} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/passive/${passive.image}`}}/>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>{passive.description}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {renderAbility(passive, spells, currSpell, spellIndex)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 30
  },
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 20,
    margin: 10,
    marginBottom: 30,
  },
  spellContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
  }
});

export default SpellScreen;