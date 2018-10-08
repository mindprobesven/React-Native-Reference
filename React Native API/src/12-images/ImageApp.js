import React, { Component } from 'react'
import {StyleSheet, View, Image} from 'react-native'
import StaticImage from './StaticImage';
import RemoteImage from './RemoteImage';
import ProgressExample from './ProgressExample';

export default class ImageApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressExample />
      </View>    
    )
  }
}

/*
<StaticImage />
<RemoteImage />
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    flex: 1
  }
})