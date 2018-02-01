import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {screen} from '../../common/common';

type Props = {
    icon: string,
    title: string,
    onPress: Function
}

class HomeMenuItem extends Component<Props> {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={this.props.icon} style={styles.icon}></Image>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width/5,
        height: screen.width/5,
    },
    icon: {
        width: screen.width/9,
        height: screen.width/9,
    },
    title: {
        fontSize: 14,
        color: 'black',
    }
});

export default HomeMenuItem;