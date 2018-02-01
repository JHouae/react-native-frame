import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Mine from './Mine';

const Navigator = StackNavigator({
  Mine:{screen: Mine},
},{
  initialRouteName:'Mine',
})

export default class MineNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
