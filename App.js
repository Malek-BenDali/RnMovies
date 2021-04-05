import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor="#0d98ba" />
      <Navigation />
    </PersistGate>
  </Provider>
);

export default App;
