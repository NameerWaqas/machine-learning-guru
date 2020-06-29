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
  View,
  Text,
} from 'react-native';
import {Spinner,Content} from 'native-base'
import Main from './compnents/main/main'
import { Provider } from 'react-redux'
import { store, persistor} from './redux/store'
import { PersistGate} from 'redux-persist/integration/react'


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Lodaing/>}>
        <Main />
      </PersistGate>
    </Provider>
  );
};
export default App;

let Lodaing=()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Content justifyContent='center' alignItems='center'>
      <Text style={{textAlign:'center'}}>Just a moment....</Text>
      <Text style={{textAlign:'center'}}>LOADING....</Text>
        <Spinner color='green' />
      </Content>
    </View>
  )
}
