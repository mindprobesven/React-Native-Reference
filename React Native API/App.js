import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';

import HelloWorld from './src/1-hello-world/HelloWorld';
import SomeFruits from './src/2-props/SomeFruits';
import BlinkText from './src/3-state/BlinkText';
import LotsOfStyles from './src/4-styles/LotsOfStyles';
import FlexBoxes from './src/5-flex/FlexBoxes';
import PizzaTranslator from './src/6-text-input/PizzaTranslator';
import Touchables from './src/7-touchables/Touchables';
import ScrollStuff from './src/8-scrollview/ScrollStuff';
import FlatListExample from './src/9-list-views/FlatListExample';
import SectionListExample from './src/9-list-views/SectionListExample';
import FetchExample from './src/10-networking/FetchExample';
import NavigationApp from './src/11-react-navigation/NavigationApp';
import ImageApp from './src/12-images/ImageApp';
import AnimationsApp from './src/13-animations/AnimationsApp';
import ComponentsApp from './src/14-native-components/ComponentsApp';


const instructions = Platform.select({
  ios: 'You are on,\n iOS',
  android: 'You are on,\n Android',
});

export default class App extends Component {
  render() {
    return (
      <ComponentsApp />
    )
  }
}

/*
<Text style={styles.instructions}>{instructions}</Text>
<HelloWorld />
<SomeFruits />
<BlinkText text={'Some blinking text'} />
<LotsOfStyles />
<FlexBoxes />
<PizzaTranslator />
<Touchables />
<ScrollStuff />
<FlatListExample />
<SectionListExample />
<FetchExample />
<NavigationApp />
<ImageApp />
<AnimationsApp />
*/

const styles = StyleSheet.create({
  container: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
