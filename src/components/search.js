import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import {filmsData} from '../helpers';

const search = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle} placeholder="Film Title" />
      <Button style={styles.container} title="Search" onPress={() => {}} />
      <FlatList
        data={filmsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 5,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
  },
  container: {
    backgroundColor: '#000',
  },
});
export default search;
