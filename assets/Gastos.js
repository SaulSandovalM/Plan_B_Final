import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, CardItem, List, Left, ListItem, Body, Icon, Title, Picker, Item, Fab, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera2 from './Cabecera2';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';
import Modalcat from '../components/Modalcat';

export default class Gastos extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
            <CardItem header>
              <Text>Gasto</Text>
            </CardItem>

            <List>
              <ListItem icon>
                <Left>
                  <Icon name="calculator" style={styles.icon}/>
                </Left>
                <Body>
                  <Valores/>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="calendar"/>
                </Left>
                <Body>
                  <Fecha/>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="paper"/>
                </Left>
                <Body >
                  <Input style={styles.input} placeholder='Descripción'/>
                </Body>
              </ListItem>
              <Modalcat/>
            </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white",
  },
  color: {
    color: "green"
  },
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    top: 32
  },
  img: {
    height: 200,
    width: '100%'
  },
  icon: {
    color: '#ff5722'
  },
  input: {
    marginLeft: 10,
    color: '#757575',
  }
});
