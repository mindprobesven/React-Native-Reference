import React, { Component } from 'react'
import { FlatList, ActivityIndicator, View, Text } from 'react-native'

export default class FetchExample extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          dataSource: json.movies
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  render() {
    const {isLoading, dataSource} = this.state

    if(isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList 
          data={dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    )
  }
}