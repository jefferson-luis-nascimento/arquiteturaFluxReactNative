import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
