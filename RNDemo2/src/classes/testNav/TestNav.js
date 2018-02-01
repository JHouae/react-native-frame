import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';


class VC1 extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'vc1',
  })
  render() {
    return (
      <View>
        <Text> VC1 </Text>
      </View>
    );
  }
}

class VC2 extends Component {
  render() {
    return (
      <View>
        <Text> VC2 </Text>
      </View>
    );
  }
}


const Navigator = StackNavigator({
  VC1: {
    screen: VC1,
  },
  VC2: {
    screen: VC2,
  },
},{
  initialRouteName:'VC1'
})

class TestNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}



export default TestNav;
