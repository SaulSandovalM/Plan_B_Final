import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, Image} from 'react-native'
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Boton extends Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }
  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 1
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => Actions.IngresosIntro()}><Text>Empezar</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(192,192,192,0.4)',
    zIndex: 1000,
    height: 1500,
    width: 550,
    position: 'absolute'
  },
  view: {
    backgroundColor: 'rgba(192,192,192,0.4)',
    zIndex: 1000,
    height: 1500,
    width: 550,
    position: 'absolute'
  }
});

export default Boton;
