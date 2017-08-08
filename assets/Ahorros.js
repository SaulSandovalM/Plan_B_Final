import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Container, Content, Card, CardItem, Button, Icon, Left, Body, Fab} from 'native-base';
import imgLogo from '../imgs/Ahorros.png';
import Cabecera2 from './Cabecera2';
import {Actions} from 'react-native-router-flux';

export default class Ahorros extends Component {
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

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Vacaciones</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Diciembre 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Carro</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Septiembre 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Videojuegos</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Agosto 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={styles.img}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

        </Content>

        <Fab active={this.state.active} direction="up" containerStyle={{}}
          style={styles.fab} position="bottomRight" onPress={() => Actions.NuevoAhorro()}>
          <Icon name="add"/>
        </Fab>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    color: "green",
    alignItems: 'center'
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  back: {
    backgroundColor: "white"
  },
  fab: {
    backgroundColor: '#5067FF'
  }
});

module.export = Ahorros;
