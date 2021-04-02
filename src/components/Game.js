import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

const Game = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedView}></Animated.View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});
