import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Input, Left, Body, Icon, CardItem, List, ListItem, Button} from 'native-base';
import CabeceraGen from './CabeceraGen';
import imgLogo from '../imgs/Ingresos.png';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';
import firebase, {firebaseAuth} from './Firebase';

export default class Ingresos extends Component {

  constructor() {
    super();
    this.state = {
      ingreso: [],
    }
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
  }

  addItem = (datos) => {
    this.state.ingreso.push(datos)
    this.setState({ingreso: this.state.ingreso})
    console.log(this.state.lista)

    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(uid)

      firebase.database().ref('usuarios/' + uid + '/ingreso').push(datos);
    });
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var ingreso = [];
      snap.forEach((child) => {
        ingreso.push({
          ingreso: child.val().ingreso,});
      });

      this.setState({ingreso: ingreso});

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
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/ingreso');
      that.listenForItems(itemsRef);
    });
  }
  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='INGRESOS'/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>

          <List>
            <ListItem icon>
              <Left>
                <Icon name="calculator" style={styles.icon}/>
              </Left>
              <Body>
                <Valores valorfun={this.valorfun}/>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="paper"/>
              </Left>
              <Body >
                <Input style={styles.input} placeholder='Descripción'/>
              </Body>
            </ListItem>

            <Button rounded block style={styles.buttonIngreso}>
              <Text style={styles.boton}>$</Text>
              <Input placeholder="Ingresos Extras" placeholderTextColor="white" style={styles.boton}/>
            </Button>

          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  color: {
    color: "green"
  },
  align: {
    flexDirection: 'row'
  },
  titulo: {
    top: 10,
    color: 'black'
  },
  img: {
    height: 200,
    width: '100%'
  },
  icon: {
    color: '#ff5722'
  },
  input: {
    marginLeft: 10,
    color: '#757575'
  },
  buttonIngreso: {
    marginTop: 15,
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

module.export = Ingresos;
