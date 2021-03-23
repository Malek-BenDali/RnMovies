import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {filmsData} from '../helpers';
import FilmItem from './filmItem';

const search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="Film Title" />
      <TouchableOpacity
        style={styles.searchButton}
        title="Search"
        onPress={() => {}}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={filmsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FilmItem />}
      />
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 5,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
  },
  searchButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    height: 50,
    width: windowWidth * 0.6,
    borderRadius: 99,
    backgroundColor: '#0d98ba',
  },
  container: {
    padding: 10,
  },
  searchButtonText: {
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
  },
});
export default search;
