'use strict'

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

class dashboardView extends Component {
  render(){
      return (
        <View style={styles.container}>
          <Text>Dashboard View</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

module.exports = dashboardView
