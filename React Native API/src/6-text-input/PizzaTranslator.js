import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class PizzaTranslator extends Component {
  state = {
    text: ''
  }

  render() {
    const { text } = this.state

    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

export default PizzaTranslator