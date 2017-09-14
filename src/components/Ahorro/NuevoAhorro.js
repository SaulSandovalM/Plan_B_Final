import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Container, Content, Body, Icon, Fab, Input, CardItem, List, ListItem, Left} from 'native-base';
import CabeceraGen from '../Cabecera/CabeceraGen';
import imgLogo from '../../assets/imgs/ahorros-01.png';
import {Actions} from 'react-native-router-flux';
import Valores from '../Modal/Modal';

export default class NuevoAhorro extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      selected1: "key1",
    };
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
  }

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='NUEVO AHORRO'/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>
          <CardItem header style={styles.titulo}>
            <Text style={styles.texto}>¿Cuanto quieres ahorrar?</Text>
          </CardItem>

          <List>
            <ListItem icon>
              <Left>
                <Icon name="cash" style={styles.icon1}/>
              </Left>
              <Body>
                <Input placeholder="Nombre de tu ahorro" style={styles.input}></Input>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="calculator" style={styles.icon2}/>
              </Left>
              <Body>
                <Valores/>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="paper"/>
              </Left>
              <Body>
                <Input placeholder="Descripcion" style={styles.input}>Descripción</Input>
              </Body>
            </ListItem>
          </List>
        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          style={styles.fab}
          position="bottomRight">
          <Icon name="md-checkmark"/>
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  back: {
    backgroundColor: "white"
  },
  titulo: {
    justifyContent: 'center'
  },
  icon1: {
    color: '#ff5722'
  },
  icon2: {
    color: '#ff5722'
  },
  icon3: {
    color: '#2196f3'
  },
  margin: {
    marginLeft: 15
  },
  fab: {
    backgroundColor: rgb(35,86,160)
  },
  input: {
    marginLeft: 12
  }
});

module.export = NuevoAhorro;
