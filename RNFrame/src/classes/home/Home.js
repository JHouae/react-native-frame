import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, DeviceEventEmitter } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import HomeMenuView from './HomeMenuView';
import HomeGridView from './HomeGridView';
import HomeRecommendCell from './HomeRecommendCell';
import api from '../../common/api';
import { get } from '../../network/network';
import { requestDiscount, requestRecommend } from '../../actions/homeActions';


const menuInfos = [
  { title: '美食', icon: require('../../images/home/icon_homepage_food_category.png') },
  { title: '电影', icon: require('../../images/home/icon_homepage_movie_category.png') },
  { title: '酒店', icon: require('../../images/home/icon_homepage_hotel_category.png') },
  { title: 'KTV', icon: require('../../images/home/icon_homepage_ktv_category.png') },
  { title: '优惠买单', icon: require('../../images/home/icon_homepage_default.png') },
  { title: '周边游', icon: require('../../images/home/icon_homepage_foottreat_category.png') },
  { title: '生活服务', icon: require('../../images/home/icon_homepage_life_service_category.png') },
  { title: '休闲娱乐', icon: require('../../images/home/icon_homepage_entertainment_category.png') },
  { title: '丽人/美发', icon: require('../../images/home/icon_homepage_beauty_category.png') },
  { title: '购物', icon: require('../../images/home/icon_homepage_shopping_category.png') },
  { title: '丽人/美发', icon: require('../../images/home/icon_homepage_beauty_category.png') },
  { title: '电影', icon: require('../../images/home/icon_homepage_movie_category.png') },
  { title: '周边游', icon: require('../../images/home/icon_homepage_foottreat_category.png') },
  { title: '酒店', icon: require('../../images/home/icon_homepage_hotel_category.png') },
  { title: '优惠买单', icon: require('../../images/home/icon_homepage_default.png') },
  { title: '休闲娱乐', icon: require('../../images/home/icon_homepage_entertainment_category.png') },
  { title: 'KTV', icon: require('../../images/home/icon_homepage_ktv_category.png') },
];


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#06C1AE',
    }
  });
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    
    this.props.dispatch(requestDiscount());
    this.props.dispatch(requestRecommend());
  }

  menuItemPress = (index) => {
    // DeviceEventEmitter.emit('showLoginVC');
  }

  showToast = () => {
    const toast = this.props.toast;
    Toast.show(toast, {
      duration: 2000, // toast显示时长
      position: Toast.positions.CENTER, // toast位置
      shadow: true, // toast是否出现阴影
      animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
      hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
      delay: 0, // toast显示的延时
    });
  }

  render() {
    const headerView = (
      <View>
        <HomeMenuView menuInfos={menuInfos} menuItemPress={this.menuItemPress} />
        <View style={{ height: 10, backgroundColor: '#f3f3f3' }}></View>
        <HomeGridView grids={this.props.discountData} />
        <View style={{ height: 10, backgroundColor: '#f3f3f3' }}></View>
      </View>
    );
    const cell = (record) => (
      <HomeRecommendCell
        imageUrl={record.item.imageUrl}
        title={record.item.title}
        subtitle={record.item.subtitle}
        price={record.item.price}
      />
    );

    return (
      <View>
        <FlatList
          ListHeaderComponent={headerView}
          data={this.props.recommendData}
          renderItem={cell}
          keyExtractor={(record) => record.id}
        />
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    recommendData: state.home.recommendData,
    discountData: state.home.discountData,
    toast: state.common.toast,
  }
}

export default connect(mapStateToProps)(Home);


