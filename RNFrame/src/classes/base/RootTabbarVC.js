import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, DeviceEventEmitter } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import TabbarItem from '../../components/TabbarItem';

import HomeNav from '../home/HomeNav';
import NearNav from '../nearBy/NearNav';
import OrderNav from '../order/OrderNav';
import MineNav from '../mine/MineNav';

import ErrorVC from './ErrorVC';
import LoginVC from '../login/LoginVC';


const TabRouteConfigs = {
  HomeNav: {
    screen: HomeNav,
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
  NearNav: {
    screen: NearNav,
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
  OrderNav: {
    screen: OrderNav,
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
  MineNav: {
    screen: MineNav,
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

class RootTabbarVC extends Component {
  componentDidMount() {
    this.loginListen = DeviceEventEmitter.addListener('showLoginVC', (e) => {
      this.props.navigation.navigate('LoginVC');
    });
  }

  componentWillUnmount() {
    this.loginListen.remove();
  }

  render() {
    return (
      <Tabbar />
    );
  }
};

const StackRouteConfigs = {
  Tab: { screen: RootTabbarVC, },
  LoginVC: { screen: LoginVC, },
};
const StackNavigatorConfigs = {
  navigationOptions: {
    header: null,
  },
  mode: 'modal',
}
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

class Root extends Component {
  render() {
    return (
      <Navigator />
    );
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Root);

