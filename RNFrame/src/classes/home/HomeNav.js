import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

const Navigator = StackNavigator({
  Home:{screen: Home},
},{
  initialRouteName:'Home',
})

export default class HomeNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
