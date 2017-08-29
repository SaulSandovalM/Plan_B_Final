import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Icon, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Valores from '../Modal/Modal';
import Modalgasto from '../Modal/Modalgasto';
import img from '../../assets/imgs/intro.jpeg';
import img2 from '../../assets/imgs/Gastos.png';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

class GastosIntro extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      lista: [],
      date: new Date()
    }
  }

  addItem = (datos) => {
    this.state.lista.push(datos)
    this.setState({lista: this.state.lista})
    console.log(this.state.lista)

    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(uid)
      firebase.database().ref('usuarios/' + uid + '/gastos').push(datos);
    });
    Actions.Inicio()
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          iname: child.val().iname,
          categoria: child.val().categoria,
          descri: child.val().descri,
          cantidad: child.val().cantidad,
          id: child.key})
        console.log(child.key);
      });
      this.setState({lista: lista});
    });
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
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/gastos');
      that.listenForItems(itemsRef);
    });
  }

  render() {
    return (
      <Image source={img} style={styles.img}>

        <View style={styles.view}>
          <View style={styles.view2}>
            <Text style={styles.titulo}>GASTOS FIJOS</Text>
            <Text style={styles.texto}>Agrega tus gastos mensuales</Text>
            <Image source={img2} style={styles.logo}/>

            <Button rounded block style={styles.buttonGastos}>
              <Text style={styles.boton}>$</Text>
              <Input placeholder="Ingresa tus Gastos" placeholderTextColor="white" style={styles.boton}/>
              <Icon name='add'/>
            </Button>

          </View>
        </View>

        <View>
          <Button rounded block style={styles.button} onPress={this.addItem}>
            <Text style={styles.boton}>Finalizar</Text>
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
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  buttonGastos: {
    marginRight: 45,
    marginLeft: 45,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default GastosIntro;
