/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './compnents/main/main'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// const store = mainStore()

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
