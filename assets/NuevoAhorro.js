import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image} from 'react-native';
import {View, Container, Content, Body, Button, Icon, Title, Item, Fab, Input, CardItem, List, ListItem, Left} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ahorros.png';
import {Actions} from 'react-native-router-flux';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';

export default class NuevoAhorro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
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
          <Image source={imgLogo} style={styles.img}/>
          <CardItem header>
            <Text>¿Cuanto quieres ahorrar?</Text>
          </CardItem>

          <List>
            <ListItem icon>
              <Left>
                <Icon name="cash" style={{
                  color: '#ff5722'
                }}/>
              </Left>
              <Body>
                <Input placeholder="Nombre de tu ahorro" style={{
                  marginLeft: 12
                }}></Input>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="calculator" style={{
                  color: '#ff5722'
                }}/>
              </Left>
              <Body>
                <Valores/>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="calendar" style={{
                  color: '#2196f3'
                }}/>
              </Left>
              <Body>
                <Fecha/>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="paper"/>
              </Left>
              <Body>
                <Text style={{
                  marginLeft: 15
                }}>Descripción</Text>
              </Body>
            </ListItem>
          </List>
        </Content>

        <Fab active={this.state.active} direction="up" containerStyle={{}} style={{
          backgroundColor: '#5067FF'
        }} position="bottomRight">
          <Icon name="add"/>
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080',
    marginTop: 10
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  back: {
    backgroundColor: "white"
  }
});

module.export = NuevoAhorro;
