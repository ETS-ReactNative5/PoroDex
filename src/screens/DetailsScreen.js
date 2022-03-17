import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useChampInfo from '../hooks/useChampInfo';
import SpellIcons from '../components/SpellIcons';
import TextContainer from '../components/TextContainer';
import MyCarousel from '../components/MyCarousel';

const DetailsScreen = ({ route }) => {
  const { name } = route.params;
  const [skinNums, setSkinNums] = useState([]);
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState('');
  const [searchInfo, champInfo, errorMessage] = useChampInfo();

  useEffect(() => {
    searchInfo(name);
  }, [])

  useEffect(() => {
    const nums = champInfo[name]?.skins.map(skin => {
      return skin.num;
    })
    const spellContainer = champInfo[name]?.spells.map((spell) => {
      return {
        name: spell.name,
        id: spell.id,
        description: spell.description
      }
    })
    let passiveStore = {
      name: champInfo[name]?.passive.name,
      description: champInfo[name]?.passive.description,
      image: champInfo[name]?.passive.image.full,
    }
    setSkinNums(nums)
    setSpells(spellContainer)
    setPassive(passiveStore)
  }, [champInfo])

  if (!champInfo || !spells) {
    return null;
  }

  return (
    <>
      <View style={styles.containerStyle}>
        <MyCarousel skinNums={skinNums} name={name}/>
      </View >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Spells:</Text>
          <View style={styles.spellPngs}>
            <SpellIcons spells={spells} passive={passive} />
          </View>
        </View>
        <TextContainer champData={champInfo[name]}/>
    </>
  );
}

const styles = StyleSheet.create({
  skinStyle: {
    margin: 10,
    borderRadius: 10,
    height: 200,
    width: 320,
    resizeMode: 'contain',
    backgroundColor: 'black',
    flex: 1,
  },
  containerStyle: {
    alignItems: 'center',
    borderRadius: 10,
    height: '32%',
  },
  textContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageStyle: {
    height: 65,
    width: 65,
    margin: 5,
    borderRadius: 10,
  },
  spellPngs: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default DetailsScreen;