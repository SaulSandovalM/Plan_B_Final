import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Valores from '../Modal/Modal';
import img from '../../assets/imgs/intro.jpeg';
import ingresos from '../../assets/imgs/Ingresos.png';

class IngresosIntro extends Component {
  render() {
    return (
      <Image source={img} style={styles.img}>

        <View style={styles.view}>
          <View style={styles.view2}>
            <Text style={styles.titulo}>INGRESOS FIJOS</Text>
            <Text style={styles.texto}>Agrega tu ingreso mensuales</Text>
            <Image source={ingresos} style={styles.logo}/>

            <Button rounded block style={styles.buttonIngreso}>
              <Text style={styles.boton}>$</Text>
              <Input placeholder="Ingresa tu Salario" placeholderTextColor="white" style={styles.boton}/>
            </Button>

          </View>
        </View>

        <View>
          <Button rounded block style={styles.buttonIngreso} onPress={() => Actions.GastosIntro()}>
            <Text style={styles.boton}>SIGUIENTE</Text>
          </Button>

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
  logo: {
    width: 200,
    height: 200
  },
  view: {
    justifyContent: 'flex-end',
    top: 50
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
  }
});

export default IngresosIntro;
