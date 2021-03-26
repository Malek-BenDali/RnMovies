import React, {createRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {getImageFromApi} from '../api/TMDBApi';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const filmItem = ({film, loading}) => {
  const {title, vote_average, release_date, overview, poster_path} = film.item;

  console.log('here : ' + loading);
  return (
    <View style={styles.main_container}>
      {loading ? (
        <ShimmerPlaceHolder
          style={styles.image}
          LinearGradient={LinearGradient}
        />
      ) : (
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(poster_path)}}
        />
      )}

      <View style={styles.content_container}>
        <View style={styles.header_container}>
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
    </View>
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
