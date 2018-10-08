import React, { Component } from 'react'
import {StyleSheet, ActivityIndicator, View, Text, TouchableHighlight} from 'react-native'

export default class ActivityIndicatorExample extends Component {
  state = {
    isShowing: false
  }
  
  _onPress = () => {
    this.setState(prevState => {
      return {isShowing: !prevState.isShowing}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          {this.state.isShowing && 
            <ActivityIndicator color="steelblue" size="small" />
          }
          {!this.state.isShowing && 
            <ActivityIndicator color="green" size="large" />
          }
        </View>
        <TouchableHighlight onPress={this._onPress}>
          <View style={styles.button}>
            <Text>Switch Indicator</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'powderblue',
    padding: 20
  },
  box: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})