import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import {Header, Left, Button, Icon, Title, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraGen extends Component {
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
        <Title style={styles.texto}>{this.props.headerText}</Title>
        <Right></Right>
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
  texto: {
    color: 'rgb(102,165,138)'
  }
});

module.export = CabeceraGen;
