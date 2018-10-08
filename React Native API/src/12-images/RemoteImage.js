import React, { Component } from 'react'
import {Image} from 'react-native'
import picture from './img/canyon.jpg'

export default class RemoteImage extends Component {
  imageURI = 'https://picsum.photos/900/1600/?image=1016'
  
  componentDidMount() {
    /*
    Image.getSize(this.imageURI, (width, height) => {
      console.log('Size: ' + width, height)
    })
    */
  }
  
  render() {
    return (
      <Image 
        source={{uri: this.imageURI}} 
        style={{
          resizeMode: 'cover',
          width: 300,
          height: 300
        }}
        // onLayout returns on layout changes {nativeEvent: {layout: {x, y, width, height}}}
        onLayout={e => console.log(e.nativeEvent)}
        
        // Invoked on load start.
        onLoadStart={e => console.log('onLoadStart')}

        // Invoked when load completes successfully.
        onLoad={e => console.log('onLoad')}

        // Invoked when load either succeeds or fails.
        onLoadEnd={e => console.log('onLoadEnd')}
      />
    )
  }
}