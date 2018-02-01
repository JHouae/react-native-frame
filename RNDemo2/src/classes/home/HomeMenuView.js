import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import PageControl from 'react-native-page-control';
import HomeMenuItem from './HomeMenuItem';
import {screen} from '../../common/common';


class Near extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }

    onScroll(e) {
        const x = e.nativeEvent.contentOffset.x;
        console.log(x);
        const current = Math.ceil(x / screen.width);
        this.setState({
            currentPage: current
        })
    }

    render() {
        let menuItems = this.props.menuInfos.map((value, index) => {
            return <HomeMenuItem 
                        icon={value.icon}
                        title={value.title}
                        key={value.title}
                        onPress={() => this.props.menuItemPress(index)}
                    />
        });

        let menuViews = [];
        const pageCount = Math.ceil(menuItems.length / 10);
        for (const i = 0; i < pageCount; i++) {
            const items = menuItems.slice(i*10, i*10+10);
            const menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView);
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    onScroll={(e) => this.onScroll(e)}
                    style= {styles.menuContainer}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                >
                    {menuViews}
                </ScrollView>
                <PageControl
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor='#06C1AE'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    menuContainer: {    
        flexDirection: "row",
    },
    itemsView: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: screen.width,
    },
    pageControl: {
        margin: 10,
    }
})

export default Near;