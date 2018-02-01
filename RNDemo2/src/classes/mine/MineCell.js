import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class MineCell extends Component {
    render() {        
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(this.props.title)}>
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Image source={this.props.image} style={styles.icon}></Image>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text>{this.props.subtitle}</Text>
                        <Image source={require('../../images/public/cell_arrow.png')} style={styles.arrow}></Image>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
})

export default MineCell;