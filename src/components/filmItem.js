import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const filmItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}> Titre du film </Text>
    </View>
  );
};

export default filmItem;

const styles = StyleSheet.create({
  container: {
    height: 190,
  },
  titleText: {},
});
