import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Valores from '../Modal/Modal';
import img from '../../assets/imgs/intro.jpeg';
import ingresos from '../../assets/imgs/Ingresos.png';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

class IngresosIntro extends Component {
  constructor() {
    super();
    this.state = {
      ingreso: [],
      objeto:{},
      date: new Date()
    }
  }

  valorfun = (valorcito) => {
    objeto = this.state.objeto
    objeto['cantidad'] = valorcito
    this.setState({objeto});
  }

  desFun = (descripcion) => {
    objeto = this.state.objeto
    objeto['descri'] = descripcion
    this.setState({objeto});
  }

  addItem = () => {
    let nuevo = this.state.objeto
    this.state.ingreso.push(nuevo);
    this.setState({ingreso: this.state.ingreso})

    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(nuevo)
      firebase.database().ref('usuarios/' + uid + '/ingreso').push(nuevo);
    });
    Actions.GastosIntro()
  }

  componentWillMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
        var key = user.key;
      }
      console.log(uid)
      console.log(key)
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/ingreso');
      that.listenForItems(itemsRef);
    });
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var ingreso = [];
      snap.forEach((child) => {
        ingreso.push({
          descri: child.val().descri,
          cantidad: child.val().cantidad,
          id: child.key})
        console.log(child.key);
      });
      this.setState({ingreso: ingreso});
    });
  }

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
          <Button rounded block style={styles.buttonIngreso} onPress={this.addItem}>
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
