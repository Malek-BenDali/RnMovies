import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import FilmItem from './filmItem';
import {useNavigation} from '@react-navigation/native';
import Avatar from './Avatar';

const Favorite = ({favoriteFilms}) => {
  const navigation = useNavigation();

  const displayDetailFilm = idFilm =>
    navigation.navigate('FilmDetail', {idFilm});

  return (
    <>
      <View style={styles.avatar}>
        <Avatar />
      </View>
      <FlatList
        data={favoriteFilms}
        keyExtractor={item => item?.id.toString()}
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
    </>
  );
};
const mapStateToProps = state => ({
  favoriteFilms: state.toggleFavorite.favoriteFilms,
});

export default connect(mapStateToProps)(Favorite);

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
  },
});
