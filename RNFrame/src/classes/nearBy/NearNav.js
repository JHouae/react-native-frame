import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Near from './Near';

const Navigator = StackNavigator({
  Near:{screen: Near},
},{
  initialRouteName:'Near',
})

export default class NearNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
