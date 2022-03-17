import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const TextContainer = ({ title, champData }) => {
  if (!champData) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Lore:</Text>
          <Text style={styles.paragraph}>{champData.lore}</Text>
        </View>
        {champData.allytips.length ?<View style={styles.textContainer}>
          <Text style={styles.title}>Ally Tips:</Text>
          <Text style={styles.paragraph}>{champData.allytips}</Text>
        </View> : null}
        {champData.enemytips.length ? <View style={styles.textContainer}>
          <Text style={styles.title}>Enemy Tips:</Text>
          <Text>{champData.enemytips}</Text>
        </View> : null}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 10,
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default TextContainer;