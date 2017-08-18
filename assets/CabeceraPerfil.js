import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import {Header, Left, Button, Icon, Title} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraPerfil extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => Actions.Inicio()}>
            <Icon name='arrow-back' style={styles.color}/>
          </Button>
        </Left>
        <Title style={styles.texto}>Perfil</Title>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  color: {
    color: 'green'
  },
  texto: {
    color: 'black',
    marginRight: '42%',
    top: 12
  }
});

module.export = CabeceraPerfil;
