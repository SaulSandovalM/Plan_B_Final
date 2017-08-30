import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Button, Icon, Title} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraGen extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => Actions.Log()}>
            <Icon name='arrow-back' style={styles.color}/>
          </Button>
        </Left>
        <Title style={styles.texto}>{this.props.headerText}</Title>
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
    color: 'green',
    marginRight: '38%',
    top: 15
  }
});

module.export = CabeceraGen;
