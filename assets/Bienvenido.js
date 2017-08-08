import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Bienvenido extends Component {
  render() {
    return (
      <Image source={require('../imgs/nn.jpg')} style={styles.img}>

        <View style={styles.view}>
          <View style={styles.view2}>
            <Text style={styles.titulo}>PLAN B APP,</Text>
            <Text style={styles.texto}>Tu mejor asesor financiero</Text>
          </View>
        </View>

        <View>
          <Button rounded block style={styles.buttonIngreso} onPress={() => Actions.Ter()}>
            <Text style={styles.boton}>EMPECEMOS</Text>
          </Button>

          <Text style={styles.pagina}>www.fixter.org</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    justifyContent: 'space-between',
    flex: 2,
    height: null,
    width: null
  },
  view: {
    justifyContent: 'flex-end',
    top: 20
  },
  view2: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  texto: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  pagina: {
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
});

export default Bienvenido;
