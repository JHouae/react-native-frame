/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import RootTabbarVC from './src/classes/base/RootTabbarVC';
import createStore from './src/store/store';


let store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootTabbarVC />
      </Provider>
    );
  }
}

