import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, TextInput} from 'react-native';
import {Container, Content, Button, Title, Right, Input, List, ListItem, Icon, Body, Left} from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Modal from 'react-native-modal';
import Valores from '../Modal/Modal';

export default class IngresosIntro extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModal: null,
      ingreso: [],
    };
  }

  _renderModalContent = () => (
    <View style={{backgroundColor: 'white', borderRadius: 10}}>
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
      </List>
      <TouchableOpacity onPress={this.addItem}>
        <Text style={styles.boton}>SIGUIENTE</Text>
      </TouchableOpacity>
  </View>
  );

  activar = () => {
    this.setState({visibleModal: 1})
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
    this.setState({visibleModal: null});
    this.setState({objeto: {}})

  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.activar}>
          <Text style={styles.boton}>EMPEZAR</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    fontWeight: 'bold',
    color: "rgb(35,86,160)",
    margin: 10
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    margin: 10
  },
  text: {
    margin: 10
  }
});

module.export = IngresosIntro;
