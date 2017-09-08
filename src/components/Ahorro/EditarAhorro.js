import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, TextInput} from 'react-native';
import {Button, Title, Right, Input, CardItem, List, ListItem, Left, Icon, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Modal from 'react-native-modal';
import Valores from '../Modal/Modal';

export default class EditarAhorro extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModal: null,
    };
  }

  _renderModalContent = () => (
    <View style={{backgroundColor: 'white', borderRadius: 10}}>
      <CardItem header style={styles.titulo}>
        <Text style={styles.texto}>Información General</Text>
      </CardItem>

      <List>
        <ListItem icon>
          <Left>
            <Icon name="cash" style={styles.icon1}/>
          </Left>
          <Body>
            <Input placeholder="Nombre de tu ahorro" style={styles.input}></Input>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="calculator" style={styles.icon2}/>
          </Left>
          <Body>
            <Valores/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="paper"/>
          </Left>
          <Body>
            <Input placeholder="Descripcion" style={styles.input}>Descripción</Input>
          </Body>
        </ListItem>
      </List>

      <View style={styles.view}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.boton}>ACEPTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cancelar}>
          <Text style={styles.boton}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
  </View>
  );

  activar = () => {
    this.setState({visibleModal: 1})
  }

  cancelar = () => {
    this.setState({visibleModal: null});
    this.setState({objeto: {}})
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.activar}>
          <Text style={styles.boton}>EDITAR AHORRO</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  input: {
    marginLeft: 12
  },
  icon1: {
    color: '#ff5722'
  },
  icon2: {
    color: '#ff5722'
  },
  icon3: {
    color: '#2196f3'
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'rgb(241,150,90)'
  },
  titulo: {
    justifyContent: 'center'
  },
  view1: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    position: 'absolute',
    zIndex: 1
  },
  view2: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    zIndex: 2
  },
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
});

module.export = EditarAhorro;
