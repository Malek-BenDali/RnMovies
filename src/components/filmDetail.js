import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const filmDetail = () => {
  const route = useRoute();
  console.log(route.params.idFilm);
  return (
    <View>
      <Text> Hola que tal </Text>
    </View>
  );
};

export default filmDetail;

const styles = StyleSheet.create({});
