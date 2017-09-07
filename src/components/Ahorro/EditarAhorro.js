import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Container, Content, Icon, Body, Fab, Left, CardItem, ListItem, List, Input} from 'native-base';
import CabeceraGen from '../Cabecera/CabeceraGen';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Valores from '../Modal/Modal';

export default class EditarAhorro extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
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
        <CabeceraGen headerText='EDITAR AHORRO'/>
        <Content>
          <View style={styles.view1}/>
          <View style={styles.view2}>
          <CardItem header style={styles.titulo}>
            <Text style={styles.texto}>Información General</Text>
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
        </View>
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
  back: {
    backgroundColor: "white"
  },
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
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: rgb(241,150,90)
  },
  titulo: {
    justifyContent: 'center'
  },
  view1: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    position: 'absolute',
    zIndex: 1
  },
  view2: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    zIndex: 2
  }
});

module.export = EditarAhorro;
