import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class ErrorVC extends Component {
  static navigationOptions = {
    title: '404'
  }
  render() {
    return (
      <View>
        <Text> 404 </Text>
      </View>
    );
  }
}
