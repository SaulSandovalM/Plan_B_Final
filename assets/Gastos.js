import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Right, Title, Fab, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera2 from './Cabecera2';
import Modalgasto from '../components/Modalgasto';

export default class Gastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      text: '$'
    };
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
  }

  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
          <Title style={styles.titulo}>Gastos</Title>
        <List style={styles.list}>
            <ListItem>
              <Text>Entretenimiento</Text>
                <Right>
                  <Text>$1200.00</Text>
                </Right>
            </ListItem>
            <ListItem>
              <Text>Trasporte</Text>
                <Right>
                  <Text>$50.00</Text>
                </Right>
            </ListItem>
            <ListItem>
              <Text>Casa</Text>
                <Right>
                  <Text>$1245.00</Text>
                </Right>
            </ListItem>
          </List>
        </Content>
        <Modalgasto/>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    top: 15,
    color: 'black'
  },
  list: {
    top: 15
  }
});

module.export = Gastos;
