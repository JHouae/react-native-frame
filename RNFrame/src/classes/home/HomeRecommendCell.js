import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';
import {screen} from '../../common/common';

export default class HomeRecommendCell extends Component {
  render() {    
    return (
      <View style={styles.container}>
        <Image source={require('../../images/home/icon_homepage_food_category.png')} style={styles.icon}/>
        <View style={{marginLeft: 10}}>
          <Text> {this.props.title} </Text>
          <Text> {this.props.subtitle} </Text>
          <Text> {this.props.price}元 </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: screen.width,
    height: 100,
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: screen.onePixel,
    borderColor: '#e8e8e8',
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 14,
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
  }
});