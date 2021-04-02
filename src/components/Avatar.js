import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Avatar = () => {
  const avatarImage = require('../../assets/images/avatar.jpg');
  const [avatarSource, setAvatarSource] = useState(
    require('../../assets/images/avatar.jpg'),
  );

  const avatarClicked = () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        console.log("l'utilisateur a annulré");
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        console.log('Photo : ' + response.uri);
        let requireSource = {uri: response.uri};
        setAvatarSource(requireSource);
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => avatarClicked()}>
      <Image style={styles.avatar} source={avatarSource} />
    </TouchableOpacity>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2,
  },
});
