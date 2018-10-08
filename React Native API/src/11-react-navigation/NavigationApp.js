import React, { Component } from 'react'
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default class NavigationApp extends Component {
  render() {
    return <RootStack />
  }
}