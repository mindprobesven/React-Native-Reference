import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'

const INDICATORS = [null, Progress.Bar, Progress.Circle, Progress.Pie]

const imageUri1 = `https://picsum.photos/1600/900/?image=1043&nocache=${Date.now()}`
const imageUri2 = `https://picsum.photos/800/450/?image=1043&nocache=${Date.now()}`
const imageUri3 = `https://picsum.photos/400/225/?image=1043&nocache=${Date.now()}`

const pseudoRandom = () => 0.5 - Math.random()

const getRandomIndicator = () => INDICATORS.slice(0).sort(pseudoRandom)[0]

const getRandomState = () => ({
  imageUri1,
  indicator: getRandomIndicator()
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  image: {
    width: 356,
    height: 200,
    backgroundColor: 'white',
    marginBottom: 3
  },
})

export default class ProgressExample extends Component {
  state = getRandomState()
  
  randomize = () => {
    this.setState(getRandomState())
  }

  render() {
    const {indicator} = this.state

    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.randomize}>
          <Image 
            source={{uri: imageUri1}}
            indicator={indicator}
            style={styles.image}
            onLoad={() => console.log('Image was loaded')}
          />
        </TouchableOpacity>
        <Image 
          source={{uri: imageUri2}}
          indicator={Progress.Bar}
          style={styles.image}
          onLoad={() => console.log('Image was loaded')}
        />
        <Image 
          source={{uri: imageUri3}}
          indicator={Progress.CircleSnail}
          style={styles.image}
          onLoad={() => console.log('Image was loaded')}
        />
      </View>
    )
  }
}