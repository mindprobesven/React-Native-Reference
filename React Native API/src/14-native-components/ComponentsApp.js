import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ActivityIndicatorExample from './ActivityIndicatorExample';
import ButtonExample from './ButtonExample';

export default class ComponentsApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonExample />
      </View>
    )
  }
}

/*
<ActivityIndicatorExample />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue'
  }
})