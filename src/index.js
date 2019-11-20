import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}

export default App;
