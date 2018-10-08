import React, {Component} from 'react'
import {Animated, Easing, Text} from 'react-native'

export default class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    xPosition: new Animated.Value(0)
  }
  
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim, {
        toValue: 1,
        duration: 1000
      }
    ).start()
    
    Animated.timing(
      this.state.xPosition, {
        toValue: 100,
        easing: Easing.elastic(10),
        duration: 2000,
        delay: 1000
      }
    ).start()
  }

  render() {
    const {fadeAnim, xPosition} = this.state

    return (
      <Animated.View style={{
        ...this.props.style, 
        opacity: fadeAnim,
        transform: [{translateY: xPosition}]
        }}>
        {this.props.children}
      </Animated.View>
    )
  }
}