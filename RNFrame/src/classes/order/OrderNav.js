import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Order from './Order';

const Navigator = StackNavigator({
  Order:{screen: Order},
},{
  initialRouteName:'Order',
})

export default class OrderNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
