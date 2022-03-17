import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ChampIcons from '../components/ChampIcons';
import SearchBar from '../components/SearchBar';
import league from '../api/league';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

  const [champs, setChamps] = useState([]);
  const [filteredChamps, setFilteredChamps] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const getChamps = async () => {
    const response = await league.get('/data/en_US/champion.json')
    setChamps(Object.keys(response.data.data));
    setFilteredChamps(Object.keys(response.data.data));
  }

  useEffect(() => {
    getChamps();
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-circle-outline" size={30} color="rgb(2, 122, 255)" />
          </TouchableOpacity>
        )
      }
    })
  }, []);

  useEffect(() => {
    const results = champs.filter((champ) => {
      if (champ.toLowerCase().includes(searchInput.toLowerCase())) {
        return champ;
      }
    })
    setFilteredChamps(results);
  }, [searchInput])

  if (!champs) {
    return null;
  };

  return (
    <View style={styles.home}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <View style={styles.champContainerStyle}>
        <FlatList
          numColumns={4}
          showsVerticalScrollIndicator={false}
          data={filteredChamps}
          keyExtractor={(champ) => champ}
          renderItem={({item}) => {
          return <ChampIcons style={styles.champStyle} champName={item}/>
          }}
          removeClippedSubviews={true}
          initialNumToRender={2}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={100}
          windowSize={7}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  champContainerStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  champStyle: {
    width: 80,
    height: 80,
  }
});

export default HomeScreen;