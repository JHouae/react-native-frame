import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import HomeGridItem from './HomeGridItem';
import {screen} from '../../common/common';

export default class HomeGridView extends Component {
  
  render() {    
    const items = this.props.grids.map((value, index) => {
      return  <HomeGridItem 
                title={value.maintitle}
                titleColor={value.deputy_typeface_color}
                subtitle={value.deputytitle}
                icon={value.imageurl}
                key={value.maintitle}
              />
    });
    return (
      <View style={styles.itemContainer}>
        {items}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screen.width,
  },

});
