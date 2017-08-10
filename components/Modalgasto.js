import React, {Component} from 'react';

import {Container, Text, Button, Content, CardItem, List, Left, ListItem, Body, Icon, Fab, Input} from 'native-base';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../estilos/Modgast.style';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';
import Modalcat from '../components/Modalcat';

export default class Example extends Component {
  state = {
    visibleModal: null
  };

  _renderModalContent = () => (
    <View style={styles.rootContainer}>

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
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        top: 10
      }}>
        <Button transparent onPress={() => this.setState({visibleModal: null})}>
          <Text style={styles.texto}>Aceptar</Text>
        </Button>
      </View>
  </View>
  );

  render() {
    return (
      <View style={styles.container}>


        <Fab active={this.state.active} direction="up" containerStyle={{}} position="bottomRight" onPress={() =>
            this.setState({visibleModal: 1})}>
          <Icon name="add"/>
        </Fab>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
          </Modal>

      </View>
    );
  }
}
