import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Input, Left, Body, Icon, CardItem, List, ListItem, Title, Button} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ingresos.png';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';

export default class Ingresos extends Component {
  state = {
    cantidad:''

  };
  valorfun=(valorcito)=>{
    const newcant=valorcito;
    this.setState({cantidad:newcant});
  }
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>

            <Title style={styles.titulo}>Ingresos</Title>

            <List>
              <ListItem icon>
                <Left>
                  <Icon name="calculator" style={styles.icon}/>
                </Left>
                <Body>
                  <Valores valorfun={this.valorfun}/>
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

              <Button rounded block style={styles.buttonIngreso}>
                <Text style={styles.boton}>$</Text>
                <Input placeholder="Ingresos Extras" placeholderTextColor="white" style={styles.boton}/>
              </Button>

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
  titulo: {
    top: 10,
    color: 'black'
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
  },
  buttonIngreso: {
    marginTop: 15,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
});

module.export = Ingresos;
