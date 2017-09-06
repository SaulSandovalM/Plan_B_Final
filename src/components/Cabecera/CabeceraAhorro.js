import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import {Header, Left, Button, Icon, Title, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraAhorro extends Component {
  atras() {
    Actions.pop()
  }

  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={this.atras.bind(this)}>
            <Icon name='arrow-back' style={styles.color}/>
          </TouchableOpacity>
        </Left>
        <Title style={styles.texto}>AHORROS</Title>
        <Right>
          <TouchableOpacity onPress={this.atras.bind(this)}>
            <Icon name='add' style={styles.color2} onPress={() => Actions.NuevoAhorro()}/>
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  color: {
    color: 'rgb(102,165,138)'
  },
  color2: {
    color: 'rgb(102,165,138)',
    margin: 15
  },
  texto: {
    color: 'rgb(102,165,138)',
    top: 15
  }
});

module.export = CabeceraAhorro;
