import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {AvatarPicker} from '../store/Actions/AvatarPicker';
import {connect} from 'react-redux';

const Avatar = ({AvatarPicker, avatarImage}) => {
  const avatarClicked = () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        console.log("l'utilisateur a annulré");
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        console.log('Photo : ' + response.uri);
        let requireSource = {uri: response.uri};
        AvatarPicker(requireSource);
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => avatarClicked()}>
      <Image style={styles.avatar} source={avatarImage} />
    </TouchableOpacity>
  );
};
const mapStateToProps = state => ({
  avatarImage: state.avatarReducer.avatarImage,
});

export default connect(mapStateToProps, {AvatarPicker})(Avatar);

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100,
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
