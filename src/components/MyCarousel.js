import React, { useState } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const MyCarousel = ({ skinNums, name }) => {

  const [index, setIndex] = useState(0);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.skinStyle} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${item}.jpg`}}/>
      </View>
    );
  }

  if (!skinNums.length) {
    return null;
  }

  return (
    <View>
      <Carousel
        data={skinNums}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={'default'}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skinStyle: {
    margin: 10,
    borderRadius: 10,
    height: 200,
    width: 300,
    resizeMode: 'cover',
    backgroundColor: 'black',
    flex: 1,
    borderWidth: 3,
  }
});

export default MyCarousel;