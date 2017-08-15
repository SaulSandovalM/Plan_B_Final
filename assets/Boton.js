import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Boton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => Actions.IngresosIntro()} style={styles.boton}><Text style={styles.text}>Empezar</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(192,192,192,0.6)',
    zIndex: 1000,
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  boton: {
    borderRadius: 50,
    marginTop: '50%'
  }
});

export default Boton;
