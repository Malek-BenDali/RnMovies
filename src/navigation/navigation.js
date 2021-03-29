import React from 'react';
import {Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Search, FilmDetail} from '../components';

const headerTitle = title => (
  <Text
    style={{
      paddingLeft: 20,
      fontFamily: 'Montserrat-Bold',
      fontSize: 20,
      color: '#fff',
    }}>
    {title}
  </Text>
);

const logo = () => (
  <Image
    source={require('../../assets/images/LOGO.png')}
    style={{width: 80, height: 80}}
  />
);
const Stack = createStackNavigator();
const navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        options={{
          title: 'Home',
          headerRight: () => logo(),
          headerStyle: {
            backgroundColor: '#0d98ba',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
        }}
        component={Search}
      />
      <Stack.Screen
        name="FilmDetail"
        options={{
          title: 'Film details',
          headerRight: () => logo(),
          headerStyle: {
            backgroundColor: '#0d98ba',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
        }}
        component={FilmDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default navigation;
