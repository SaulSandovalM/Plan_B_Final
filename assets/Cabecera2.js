import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Header, Left, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Cabecera2 extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => Actions.Inicio()}>
            <Icon name='arrow-back' style={styles.color}/>
          </Button>
        </Left>
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
  }
});

module.export = Cabecera2;
