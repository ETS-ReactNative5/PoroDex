import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchInput, setSearchInput }) => {

  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' style={styles.iconStyle}/>
      <TextInput
        style={styles.inputStyle}
        placeholder='Search...'
        value={searchInput}
        onChangeText={setSearchInput}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#dbdbdb',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});

export default SearchBar;