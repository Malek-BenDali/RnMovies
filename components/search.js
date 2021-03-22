import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const search = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle} placeholder="Film Title" />
      <Button style={styles.container} title="Search" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 5,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
  },
  container: {
    backgroundColor: '#000',
  },
});
export default search;
