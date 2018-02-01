import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dismissLoginVC } from '../../actions/common';
import { screen } from '../../common/common';

class LoginVC extends Component {
  dismissHandle = () => {
    this.props.dispatch(dismissLoginVC());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> LoginVC </Text>
        <Button title='dismiss' onPress={this.dismissHandle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: screen.width,
    height: screen.height,

  },
});

export default connect()(LoginVC);
