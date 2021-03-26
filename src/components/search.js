import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {filmsData} from '../helpers';
import FilmItem from './filmItem';
import {getFilmsFromApiWithSearchedText} from '../api/TMDBApi';

const search = () => {
  const [films, setFilms] = useState([]);
  const [searchedText, setSearchedText] = useState('');

  const loadfilms = async () => {
    try {
      if (searchedText) {
        const data = await getFilmsFromApiWithSearchedText(searchedText);
        setFilms(data.results);
      } else console.log('empty input');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Film Title"
        onChangeText={text => setSearchedText(text)}
      />
      <TouchableOpacity
        style={styles.searchButton}
        title="Search"
        onPress={() => loadfilms()}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={films}
        keyExtractor={item => item?.id.toString()}
        renderItem={item =>
          item ? (
            <FilmItem film={item} />
          ) : (
            <ActivityIndicator size="large" color="#0d98ba" />
          )
        }
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
    borderRadius: 50,
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
