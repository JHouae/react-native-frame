import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Modal } from 'react-native';
import { connect } from 'react-redux';
import HomeMenuView from './HomeMenuView';
import HomeGridView from './HomeGridView';
import HomeRecommendCell from './HomeRecommendCell';
import api from '../../common/api';
import LoginVC from '../login/LoginVC';
import { get } from '../../network/network';
import { presentLoginVC } from '../../actions/common';

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
    this.state = {
      discounts: [],
      recommendData: [],
      showModal: false,
    }
  }
  componentDidMount() {
    console.log(this.props);
    
    this.requestDiscount();
    this.requestRecommand();
  }

  requestDiscount = () => {
    get(api.discount).then((result) => {
      this.setState({ discounts: result.data });
    })
  }

  requestRecommand = () => {
    get(api.recommend).then((result) => {
      let dataList = result.data.map(
        (info) => {
          return {
            id: info.id,
            imageUrl: info.squareimgurl,
            title: info.mname,
            subtitle: `[${info.range}]${info.title}`,
            price: info.price
          }
        }
      )
      this.setState({
        recommendData: dataList,
      })
    })
  }

  menuItemPress = (index) => {
    this.props.dispatch(presentLoginVC());
  }

  render() {
    const headerView = (
      <View>
        <HomeMenuView menuInfos={menuInfos} menuItemPress={this.menuItemPress} />
        <View style={{ height: 10, backgroundColor: '#f3f3f3' }}></View>
        <HomeGridView grids={this.state.discounts} />
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
          data={this.state.recommendData}
          renderItem={cell}
          keyExtractor={(record) => record.id}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.showLoginModal}
        >
          <LoginVC />
        </Modal>
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    showLoginModal: state.common.showLoginModal,
  }
}

export default connect(mapStateToProps)(Home);


