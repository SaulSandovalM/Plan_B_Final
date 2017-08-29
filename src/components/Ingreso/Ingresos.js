import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Input, Left, Body, Icon, List, ListItem, Button, Fab} from 'native-base';
import CabeceraGen from '../Cabecera/CabeceraGen';
import imgLogo from '../../assets/imgs/Ingresos.png';
import Valores from '../Modal/Modal';
import Fecha from '../Modal/Fecha';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

export default class Ingresos extends Component {
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
                <Input style={styles.input} placeholder='Descripción' onChangeText={this.desFun}/>
              </Body>
            </ListItem>

            <Button rounded block style={styles.buttonIngreso}>
              <Text style={styles.boton}>$</Text>
              <Input placeholder="Ingresos Extras" placeholderTextColor="white" style={styles.boton}/>
            </Button>

          </List>
        </Content>
        <Fab direction="up" containerStyle={{}} position="bottomRight" onPress={this.addItem}>
          <Icon name="add"/>
        </Fab>
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
