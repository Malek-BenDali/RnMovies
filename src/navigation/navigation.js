import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SearchStackNavigator from './SearchStackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorite} from '../components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#0d98ba',
      }}>
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="search1"
              size={focused ? 35 : 25}
              color={focused ? '#fff' : '#0d98ba'}
            />
          ),
        }}
        component={SearchStackNavigator}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name={focused ? 'heart' : 'hearto'}
              size={focused ? 35 : 25}
              color={focused ? '#fff' : '#0d98ba'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default navigation;
