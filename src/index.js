import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}

export default App;
