import React, {Component} from 'react'
import {Animated, Text} from 'react-native'

export default class ComposingAnimations extends Component {
  state = {
    position: new Animated.ValueXY(),
    twirl: new Animated.Value(0)
  }
  
  componentDidMount() {
    const {position, twirl} = this.state
    
    Animated.sequence([
      Animated.decay(position, {
        velocity: {x: 1, y: 1},
        deceleration: 0.99,
        useNativeDriver: true
      }),
      Animated.parallel([
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true
        }),
        Animated.timing(twirl, {
          toValue: 360,
          useNativeDriver: true
        })
      ])
    ]).start()
  }

  render() {
    const {position, twirl} = this.state

    return (
      <Animated.View style={{
        ...this.props.style,
        zIndex: 9999,
        transform: [
          {translateY: position.y},
          {translateX: position.x},
          {rotate: twirl.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })},
          {perspective: 1000}
        ]
        }}>
        {this.props.children}
      </Animated.View>
    )
  }
}