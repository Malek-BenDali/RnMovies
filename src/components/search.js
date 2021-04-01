import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FilmItem from './filmItem';
import ShimmerFilm from './ShimmerFilm';
import {getFilmsFromApiWithSearchedText} from '../api/TMDBApi';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';

const search = ({favoriteFilms}) => {
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
        onPress={() => searchNewFilm()}
        disabled={loading}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <>
          <ShimmerFilm />
          <ShimmerFilm />
          <ShimmerFilm />
          <ShimmerFilm />
          <ShimmerFilm />
        </>
      ) : (
        <FlatList
          data={films}
          extraData={favoriteFilms}
          keyExtractor={item => item?.id.toString()}
          onEndReachedThreshold={0.3}
          onEndReached={() => loadMore()}
          renderItem={item => (
            <FilmItem
              film={item}
              detailFilm={displayDetailFilm}
              isFilmFavorite={
                favoriteFilms.findIndex(film => {
                  return film.id === item.item.id;
                }) !== -1
                  ? true
                  : false
              }
            />
          )}
        />
      )}
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
const mapStateToProps = state => ({
  favoriteFilms: state.favoriteFilms,
});

export default connect(mapStateToProps)(search);
