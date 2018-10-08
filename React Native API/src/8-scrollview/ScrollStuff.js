import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  Text
} from 'react-native'

export default class ScrollStuff extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Time to do some scrolling</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Text style={{fontSize: 96}}>Time to do some scrolling</Text>
      </ScrollView>
    )
  }
}