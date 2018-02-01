import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import TabbarItem from '../../components/TabbarItem';
import HomeVC from '../home/Home';
import MineVC from '../mine/Mine';
import NearVC from '../nearBy/Near';
import OrderVC from '../order/Order';
import TestNav from '../testNav/TestNav';
import ErrorVC from './ErrorVC';
import LoginVC from '../login/LoginVC';


const TabRouteConfigs = {
  HomeVC: {
    screen: HomeVC,
    path: '/home',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '团购',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ tintColor: tintColor, width: 25, height: 25 }}
          source={focused ? require('../../images/tabbar/tabbar_homepage.png')
            : require('../../images/tabbar/tabbar_homepage_selected.png')}
        />
      )
    })
  },
  NearVC: {
    screen: TestNav,
    path: '/near',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '附近',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ tintColor: tintColor, width: 25, height: 25 }}
          source={focused ? require('../../images/tabbar/tabbar_merchant.png')
            : require('../../images/tabbar/tabbar_merchant_selected.png')}
        />
      )
    }),
  },
  OrderVC: {
    screen: OrderVC,
    path: '/order',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '附近',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ tintColor: tintColor, width: 25, height: 25 }}
          source={focused ? require('../../images/tabbar/tabbar_order.png')
            : require('../../images/tabbar/tabbar_order_selected.png')}
        />
      )
    }),
  },
  MineVC: {
    screen: MineVC,
    path: '/mine',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ tintColor: tintColor, width: 25, height: 25 }}
          source={focused ? require('../../images/tabbar/tabbar_mine.png')
            : require('../../images/tabbar/tabbar_mine_selected.png')}
        />
      )
    }),
  },
};
const TabNavigatorConfigs = {
  // initialRouteName: 'MineVC',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazy: true,
};
const Tabbar = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

const StackRouteConfigs = {
  Tab: { screen: Tabbar, },
  ErrorVC: { screen: ErrorVC, },
};
const StackNavigatorConfigs = {
  navigationOptions: {
    header: null,
  }
}

const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

class RootTabbarVC extends Component {
  render() {
    return (
      <Navigator />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.common.showLoginModal,
  }
}

export default connect(mapStateToProps)(RootTabbarVC);

