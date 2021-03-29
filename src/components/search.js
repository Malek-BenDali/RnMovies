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
import {useNavigation} from '@react-navigation/native';

const search = () => {
  const [films, setFilms] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState({
    currentPage: 0,
    all: 0,
  });
  const navigation = useNavigation();

  const getFilms = () => {
    try {
      return getFilmsFromApiWithSearchedText(
        searchedText,
        pages.currentPage + 1,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    if (pages.currentPage < pages.all) {
      const data = await getFilms();
      setPages({...pages, currentPage: data.page});
      films.push(...data.results);
    } else return;
  };

  const searchNewFilm = async () => {
    setLoading(true);
    setPages({currentPage: 0, all: 0});
    setFilms([]);
    if (searchedText) {
      const data = await getFilms();
      setFilms([...data.results]);
      setPages({currentPage: data.page, all: data.total_pages});
    } else console.log('empty input');

    setLoading(false);
  };

  const displayDetailFilm = idFilm =>
    navigation.navigate('FilmDetail', {idFilm});

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Film Title"
        onChangeText={text => setSearchedText(text)}
        onSubmitEditing={() => searchNewFilm()}
      />
      <TouchableOpacity
        style={styles.searchButton}
        title="Search"
        onPress={() => searchNewFilm()}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={films}
        keyExtractor={item => item?.id.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        renderItem={item => (
          <FilmItem film={item} detailFilm={displayDetailFilm} />
        )}
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
    fontFamily: 'Montserrat-Regular',
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
    paddingBottom: 150,
  },
  searchButtonText: {
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
  },
});
export default search;
