import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import Store from './src/store/configureStore';

const App = () => (
  <Provider store={Store}>
    <StatusBar backgroundColor="#0d98ba" />
    <Navigation />
  </Provider>
);

export default App;
