import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, TextInput} from 'react-native';
import {Container, Content, Button, Title, Right, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Modal from 'react-native-modal';

export default class Depositar extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Title style={styles.title}>Depósito</Title>
          <Text style={styles.text}>El depósito no tomará ningun valor de tu cuenta.
            Sirve sólo como información para el control personal</Text>

          <Text style={styles.text}>Cantidad</Text>
            <TextInput keyboardType='numeric' style={styles.text}/>
          <View style={styles.view}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.boton}>ACEPTAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.boton}>CANCERLAR</Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
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

module.export = Depositar;
