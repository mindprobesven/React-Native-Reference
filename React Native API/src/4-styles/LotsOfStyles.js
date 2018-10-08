import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    )
  }
}

export default LotsOfStyles

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  red: {
    color: 'red'
  }
})