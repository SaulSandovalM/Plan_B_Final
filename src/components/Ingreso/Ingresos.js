import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Input, Left, Body, Icon, List, ListItem, Button, Fab, Title} from 'native-base';
import CabeceraGen from '../Cabecera/CabeceraGen';
import imgLogo from '../../assets/imgs/Ingresos.png';
import Valores from '../Modal/Modal';
import Fecha from '../Modal/Fecha';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import {Actions} from 'react-native-router-flux';

export default class Ingresos extends Component {
  constructor() {
    super();
    this.state = {
      ingreso: [],
      objeto: {},
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

      if (user) {
        var uid = user.uid;
      }
      console.log(nuevo)
      firebase.database().ref('usuarios/' + uid + '/ingreso').push(nuevo);
    });
    Actions.Inicio()
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
        ingreso.push({descri: child.val().descri,
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
                <Icon name="paper" style={styles.icon}/>
              </Left>
              <Body >
                <Input style={styles.input} placeholder='Descripción' onChangeText={this.desFun}/>
              </Body>
            </ListItem>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.text}>Ingreso Extra</Text>
            </View>
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
                <Icon name="paper" style={styles.icon}/>
              </Left>
              <Body >
                <Input style={styles.input} placeholder='Descripción' onChangeText={this.desFun}/>
              </Body>
            </ListItem>

          </List>

        </Content>

        <Fab
          direction="up"
          position="bottomRight"
          onPress={this.addItem}
          style={styles.fab}>
          <Icon name="md-checkmark"/>
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
    color: 'rgb(102,165,138)'
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
  },
  fab: {
    backgroundColor: "rgb(102,165,138)"
  },
  text: {
    margin: 20,
    fontSize: 20
  }
});

module.export = Ingresos;
