import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Container, Content, Icon, Body, Fab, Left} from 'native-base';
import imgLogo from '../../assets/imgs/Ahorros.png';
import CabeceraGen from '../Cabecera/CabeceraGen';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

export default class EditarAhorro extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='EDITAR AHORRO'/>
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
                <Icon name="calendar" style={styles.icon3}/>
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
  fab: {
    backgroundColor: rgb(35,86,160)
  },
  input: {
    marginLeft: 12
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
  titulo: {
    justifyContent: 'center'
  },
});

module.export = EditarAhorro;
