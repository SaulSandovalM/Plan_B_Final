import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Input, Left, Body, Icon, CardItem, List, ListItem} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ingresos.png';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';

export default class Ingresos extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>
            <CardItem header>
              <Text>Nuevo Ingreso</Text>
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
                  <Icon name="paper"/>
                </Left>
                <Body >
                  <Input style={styles.input} placeholder='Descripción'/>
                </Body>
              </ListItem>

            </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
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
    color: '#757575'
  }
});

module.export = Ingresos;
