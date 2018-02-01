import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, SectionList} from 'react-native';
import { connect } from 'react-redux';
import MineCell from './MineCell';
import { presentLoginVC } from '../../actions/common';

class Mine extends Component {
    static navigationOptions = ({navigation}) => ({
        title:'我的',
        headerStyle: {
            backgroundColor: '#06C1AE',
        }
    })

    getDataList() {
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../../images/mine/icon_mine_wallet.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../../images/mine/icon_mine_balance.png')},
                    {title: '抵用券', subtitle: '63', image: require('../../images/mine/icon_mine_voucher.png')},
                    {title: '会员卡', subtitle: '2', image: require('../../images/mine/icon_mine_membercard.png')}
                ],
                [
                    {title: '好友去哪', image: require('../../images/mine/icon_mine_friends.png')},
                    {title: '我的评价', image: require('../../images/mine/icon_mine_comment.png')},
                    {title: '我的收藏', image: require('../../images/mine/icon_mine_collection.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../../images/mine/icon_mine_membercenter.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../../images/mine/icon_mine_member.png')}
                ],
                [
                    {title: '客服中心', image: require('../../images/mine/icon_mine_customerService.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../../images/mine/icon_mine_aboutmeituan.png')}
                ]
            ]
        )
    }

    selectedItem = (index) => {
        // console.log(index);
        this.props.navigation.navigate('ErrorVC');
        // this.props.dispatch(presentLoginVC());
    }
    
    keyExtractor(item ,index) {
        return "index"+index+item;
    } 

    render() {
        return (
            <SectionList
                renderItem={({item}) => <MineCell image={item.image} title={item.title} subtitle={item.subtitle} key={item.title} onPress={this.selectedItem}/>}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e8e8e8'}}></View>}
                SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#e8e8e8'}}></View>}
                ListHeaderComponent={() => <View style={{height: 100, backgroundColor: '#e8e8e8'}}><Text>我是header</Text></View>}
                sections={[ // 不同section渲染相同类型的子组件
                    {data: this.getDataList()[0]},
                    {data: this.getDataList()[1]},
                    {data: this.getDataList()[2]},
                ]}
            />
        );
    }
}

export default connect()(Mine);