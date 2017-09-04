import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Container, Content, Card, CardItem, Button, Icon, Body, Fab} from 'native-base';
import imgLogo from '../../assets/imgs/Ahorros.png';
import CabeceraGen from '../Cabecera/CabeceraGen';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

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
      firebase.database().ref('usuarios/' + uid + '/ahorros/' + item.id).set(null); //Esta linea coloca valor nulo en el element que se seleccione
    });
  }

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='AHORROS'/>
        <Content>

          <Card style={{margin: 20}}>
            <CardItem>
                <Body style={styles.body}>
                  <Text style={styles.texto}>Vacaciones</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Diciembre 2017</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
                <Button transparent>
                  <Icon active name="star"/>
                  <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
                </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
                <Body style={styles.body}>
                  <Text style={styles.texto}>Carro</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Septiembre 2017</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
                <Button transparent>
                  <Icon active name="star"/>
                  <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
                </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
                <Body style={styles.body}>
                  <Text style={styles.texto}>Videojuegos</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Agosto 2017</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
                <Button transparent>
                  <Icon active name="star"/>
                  <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
                </Button>
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
    fontSize: 20
  },
  img: {
    height: 200,
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
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: "rgb(35,86,160)"
  }
});

module.export = Ahorros;
