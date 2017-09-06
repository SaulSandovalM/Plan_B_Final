import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Boton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => Actions.IngresosIntro()} style={styles.boton}>
          <Text style={styles.text}>Empezar</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  boton: {
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default Boton;
