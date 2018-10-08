import React, { Component } from 'react'
import {Image} from 'react-native'
import picture from './img/canyon.jpg'

export default class StaticImage extends Component {
  render() {
    const {width, height} = Image.resolveAssetSource(picture);
    console.log('Image: ' + width, height)
    
    return (
      <Image 
        source={picture} 
        style={{flex: 1, resizeMode: 'contain', height: undefined, width: undefined}} 
      />
    )
  }
}