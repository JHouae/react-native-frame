import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { screen } from '../../common/common';


class HomeGridItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{color: this.props.titleColor}}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>
        <Image source={require('../../images/home/icon_homepage_food_category.png')} style={styles.icon}></Image>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screen.width / 2,
    height: screen.width / 4,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#e3e3e3',
    // borderWidth: 1,
    borderBottomWidth: screen.onePixel,
    borderRightWidth: screen.onePixel,
  },
  icon: {
    width: screen.width / 8,
    height: screen.width / 8,
  },
  title: {
    fontSize: 14,
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
  }
});

export default HomeGridItem;