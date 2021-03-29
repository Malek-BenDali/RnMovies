import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
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
