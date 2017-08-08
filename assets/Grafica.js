import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Pie from 'react-native-pie'

export default class Grafica extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Pie radius={50} series={[20, 40, 40]} colors={['red', 'blue', 'purple']}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24
  }
})
