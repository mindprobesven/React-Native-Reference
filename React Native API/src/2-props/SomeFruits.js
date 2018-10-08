import React, { Component } from 'react'
import { View,Image } from 'react-native'

class SomeFruits extends Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    )
  }
}

export default SomeFruits