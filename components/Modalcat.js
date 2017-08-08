import React, {Component} from 'react';
import {Button, List, ListItem, Text, Icon, Left, Body, Right} from 'native-base';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../estilos/modcat.style';

export default class Example extends Component {
  state = {
    visibleModal: null,
    icono: '',
    categoria: ''
  };

  _renderModalContent = () => (

    <View style={styles.rootContainer}>
      <List >
        <ListItem itemDivider>
          <Text>Categoria</Text>
          <Text>Alimentos</Text>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'restaurant', categoria: 'Alimentos', visibleModal: null})}>
          <Left>
            <View>
              <Icon style={styles.icono} name="restaurant"/>
            </View>
          </Left>
          <Body>
            <Text>Alimentos</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'book', categoria: 'Educación', visibleModal: null})}>
          <Left>
            <Icon style={styles.icono} name="book"/>
          </Left>
          <Body>
            <Text>Educación</Text>
          </Body>

        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'umbrella', categoria: 'Estrategia', visibleModal: null})}>
          <Left >
            <Icon style={styles.icono} name="umbrella"/>
          </Left>
          <Body>
            <Text>Entretenimiento</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'home', categoria: 'Hogar', visibleModal: null})}>
          <Left>
            <Icon style={styles.icono} name="home"/>
          </Left>
          <Body>
            <Text>Hogar</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'barcode', categoria: 'Factura', visibleModal: null})}>
          <Left>
            <Icon style={styles.icono} name="barcode"/>
          </Left>
          <Body>
            <Text>Factura</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'heart', categoria: 'Salud', visibleModal: null})}>
          <Left>
            <Icon style={styles.icono} name="heart"/>
          </Left>
          <Body>
            <Text>Salud</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.setState({icono: 'car', categoria: 'Transporte', visibleModal: null})}>
          <Left>
            <Icon style={styles.icono} name="car"/>
          </Left>
          <Body>
            <Text>Transporte</Text>
          </Body>
        </ListItem>
      </List>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <ListItem icon>
          <Left>
            {this.state.icono == ''
              ? <Icon style={styles.icono} name='add'/>
              : <Icon style={styles.icono} name={this.state.icono}/>}
          </Left>
          <Button transparent dark onPress={() => this.setState({visibleModal: 1})}>
            {this.state.icono == ''
              ? <Text style={{
                  color: '#757575'
                }}>Categoria</Text>
              : <Text style={{
                color: '#757575'
              }}>{this.state.categoria}</Text>}
          </Button>
        </ListItem>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>

      </View>
    );
  }
}
