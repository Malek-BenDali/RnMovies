import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {getImageFromApi} from '../api/TMDBApi';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const filmItem = ({film, detailFilm, isFilmFavorite}) => {
  const {title, vote_average, release_date, overview, poster_path} = film.item;

  const displayLike = () => {
    if (isFilmFavorite) return <AntDesignIcon name="hearto" size={30} />;
  };

  return (
    <TouchableOpacity
      style={styles.main_container}
      onPress={() => detailFilm(film.item.id)}>
      <Image
        style={styles.image}
        source={{uri: getImageFromApi(poster_path)}}
      />

      <View style={styles.content_container}>
        <View style={styles.header_container}>
          {displayLike()}
          <Text style={styles.title_text}>{title}</Text>
          <Text style={styles.vote_text}> {vote_average} </Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>
            {overview}
          </Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date_text}>Sorti le {release_date} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default filmItem;

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  vote_text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
    color: '#666666',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
  },
});
