import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default class ButtonExample extends Component {
  state ={
    counter: 0
  }

  _onPress = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1}
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPress}
            color="powderblue"
            title="Stretch Button"
          />
        </View>

        <View style={styles.wrappedButtonContainer}>
          <Button
            onPress={this._onPress}
            color="powderblue"
            title="Wrapped Button"
          />
        </View>
      
        <View style={styles.buttonRowContainer}>
          <Button
            onPress={this._onPress}
            color="powderblue"
            title="This is a long button"
          />
          <Button
            onPress={this._onPress}
            color="green"
            title="Short one"
            disabled={true}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>Pressed {this.state.counter} times</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  wrappedButtonContainer: {
    margin: 20,
    alignItems: 'center'
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  contentContainer: {
    margin: 20,
    alignItems: 'center'
  },
  content: {
    color: 'white'
  }
})