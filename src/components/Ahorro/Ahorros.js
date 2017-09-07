import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Card, CardItem, Button, Icon, Body, Fab, Left, View, DeckSwiper} from 'native-base';
import imgLogo from '../../assets/imgs/Ahorros.png';
import CabeceraGen from '../Cabecera/CabeceraGen';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Valores from './Depositar';

export default class Ahorros extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
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
      firebase.database().ref('usuarios/' + uid + '/ahorros').push(datos);
    });
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
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/ahorros');
      that.listenForItems(itemsRef);
    });
  }

  borrar = (item) => {
    console.log(item)
    let updates = {};
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      firebase.database().ref('usuarios/' + uid + '/ahorros/' + item.id).set(null);
      //Esta linea coloca valor nulo en el element que se seleccione
    });
  }

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='AHORROS'/>
        <Content>

          <Card>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text style={styles.texto}>Celular</Text>
                <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
              </Body>
            </CardItem>
            <CardItem>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={()=> Actions.EditarAhorro()}>EDITAR AHORRO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={() => Actions.Depositar()}>DEPOSITAR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text style={styles.texto}>Celular</Text>
                <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
              </Body>
            </CardItem>
            <CardItem>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={()=> Actions.EditarAhorro()}>EDITAR AHORRO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={() => Actions.Depositar()}>DEPOSITAR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text style={styles.texto}>Celular</Text>
                <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
              </Body>
            </CardItem>
            <CardItem>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={()=> Actions.EditarAhorro()}>EDITAR AHORRO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.boton} onPress={() => Actions.Depositar()}>DEPOSITAR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>

        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          style={styles.fab}
          position="bottomRight"
          onPress={() => Actions.NuevoAhorro()}>
          <Icon name="add"/>
        </Fab>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  img: {
    height: 75,
    width: '100%',
    flex: 1
  },
  back: {
    backgroundColor: "white"
  },
  fab: {
    backgroundColor: "rgb(35,86,160)"
  },
  body: {
    flexDirection: 'column'
  },
  text: {
    fontSize: 16,
    color: "rgb(35,86,160)"
  },
  text2: {
    fontSize: 16
  },
  view: {
    alignSelf: "center"
  },
  card: {
    elevation: 3
  },
  img: {
    height: 200,
    flex: 1
  },
  icon: {
    color: '#ED4A6A'
  },
  view2: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    padding: 15
  },
  boton: {
    fontWeight: 'bold',
    color: "rgb(35,86,160)",
    margin: 10
  }
});

module.export = Ahorros;
