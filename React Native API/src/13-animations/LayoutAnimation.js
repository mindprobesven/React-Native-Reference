import React, { Component } from 'react'
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true)

export default class LayoutAnimationExample extends Component {
  state = {
    w: 100,
    h: 100
  }

  _onPress = () => {
    const {w, h} = this.state

    LayoutAnimation.spring()
    this.setState({w: w + 15, h: h + 15})
  }
  
  render() {
    const {w, h} = this.state

    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: w, height: h}]} /> 
        <TouchableOpacity onPress={this._onPress} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'powderblue',
    marginBottom: 15
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})