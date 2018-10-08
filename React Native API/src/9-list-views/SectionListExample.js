import React, { Component } from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native'

export default class SectionListExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={sectionsData}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const sectionsData = [
  {title: 'D', data: ['Devin']},
  {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'steelblue'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontWeight: 'bold',
    backgroundColor: 'powderblue'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})