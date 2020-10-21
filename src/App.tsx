/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// Must be the very 1st import!
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import {SafeAreaView, StatusBar} from 'react-native';
import RootRouter from './router';

const App: React.FC = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1}}>
      <RootRouter />
    </SafeAreaView>
  </Provider>
);

export default App;
