import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import FadeInView from './FadeInView';
import ComposingAnimations from './ComposingAnimations';
import LayoutAnimationExample from './LayoutAnimation';

export default class AnimationsApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LayoutAnimationExample />
        <View style={styles.item}>
          <Text style={styles.content}>STATIC</Text>
        </View>
        <ComposingAnimations style={styles.item}>
          <Text style={styles.content}>ANIMATED</Text>
        </ComposingAnimations>
        <ComposingAnimations style={styles.item}>
          <Text style={styles.content}>ANIMATED</Text>
        </ComposingAnimations>
        <View style={styles.item}>
          <Text style={styles.content}>STATIC</Text>
        </View>
      </View>
    )
  }
}

/*
 <FadeInView style={styles.item}>
          <Text style={styles.content}>FADING</Text>
        </FadeInView>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250, 
    height: 50, 
    backgroundColor: 'powderblue'
  },
  content: {
    fontSize: 20,
    textAlign: 'center'
  }
})