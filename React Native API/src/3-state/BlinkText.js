import React, { Component } from 'react'
import { Text } from 'react-native'

class BlinkText extends Component {
  state = {
    isShowingText: false
  }

  timerId = null

  componentDidMount() {
    timerId = setInterval(() => {
      this.setState(prevState => {
        return { isShowingText: !prevState.isShowingText }
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const { text } = this.props
    const { isShowingText } = this.state

    let display = isShowingText ? text : ''

    return (
      <Text>{display}</Text>
    )
  }
}

export default BlinkText