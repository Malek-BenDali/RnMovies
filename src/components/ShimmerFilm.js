import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const ShimmerFilm = () => {
  return (
    <View style={styles.main_container}>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        style={styles.image}
      />

      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <ShimmerPlaceHolder LinearGradient={LinearGradient} />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.title_text}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.title_text}
          />
        </View>
        <View style={styles.description_container}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.description_text}
          />
        </View>
        <View style={styles.date_container}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.date_text}
          />
        </View>
      </View>
    </View>
  );
};

export default ShimmerFilm;
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
