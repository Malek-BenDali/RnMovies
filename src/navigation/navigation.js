import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SearchStackNavigator from './SearchStackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchStackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default navigation;
