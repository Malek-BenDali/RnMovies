import React, {useState, useEffect} from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getFilmDetailsFromApi, getImageFromApi} from '../api/TMDBApi';
import {connect} from 'react-redux';
import {LikeFilm} from '../store/Actions/LikeFilm';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const filmDetail = ({favoriteFilms, LikeFilm}) => {
  const [film, setFilm] = useState(undefined);

  const route = useRoute();
  const {idFilm} = route.params;

  useEffect(async () => {
    setFilm(await getFilmDetailsFromApi(idFilm));
  }, [favoriteFilms]);

  const likedFilm = () => {
    if (favoriteFilms?.findIndex(item => item.id === film.id) !== -1)
      return true;
    return false;
  };

  const displayFilm = () =>
    film && (
      <ScrollView style={styles.scrollview_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.backdrop_path)}}
        />
        <Text style={styles.title_text}>{film.title}</Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => LikeFilm(film)}>
          <AntDesignIcon name={likedFilm() ? 'heart' : 'hearto'} size={30} />
        </TouchableOpacity>
        <Text style={styles.default_text}>{film.overview}</Text>

        <Text style={styles.hightlightText}>
          Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}
        </Text>

        <View style={styles.row}>
          <Text style={styles.hightlightText}>Note : </Text>
          <Text style={styles.default_text}>{film.vote_average} / 10 </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.hightlightText}>Nombre de votes : </Text>
          <Text style={styles.default_text}>{film.vote_count}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hightlightText}>Budget : </Text>
          <Text style={styles.default_text}>
            {numeral(film.budget).format('0,0[.]00 $')}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.hightlightText}>Genre(s) : </Text>
          <Text style={styles.default_text}>
            {film.genres.map(genre => genre.name).join(' / ')}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hightlightText}>Companie(s) : </Text>
          <Text style={styles.default_text}>
            {film.production_companies.map(company => company.name).join(' / ')}
          </Text>
        </View>
      </ScrollView>
    );
  return <View style={styles.container}>{displayFilm()}</View>;
};

const mapStateToProps = state => ({
  favoriteFilms: state.favoriteFilms,
});

export default connect(mapStateToProps, {LikeFilm})(filmDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  scrollview_container: {
    flex: 1,

    marginBottom: 20,
  },
  image: {
    height: 169,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#0d98ba',
    textAlign: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    fontFamily: 'Montserrat-Regular',
  },
  hightlightText: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: '#0d98ba',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textShimmer: {
    height: 20,
    width: '100%',
    marginTop: 5,
  },
  likeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
