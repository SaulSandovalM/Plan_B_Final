import React, {Component} from 'react';

import {Container, Text, Button, CardItem, List, Left, ListItem, Body, Icon, Input} from 'native-base';

import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Valores from './Modal';
import Fecha from './Fecha';
import Modalcat from './Modalcat';

export default class ModalEditgasto extends Component {

  constructor(props){
    super(props)
    this.state = {
      objeto:{},
      fecha: '',
      icono: this.props.item.iname,
    };
  }




conFun = (iconito) => {
    objeto = this.props.item
    objeto['iname'] = iconito
    //const newIcon=iconito;
    this.setState({
      //icono:newIcon,
      objeto
    })
  }

  iFun = (i) => {
    newIcon = i;
    this.setState({icono: newIcon})
  }
  cateFun = (categorita) => {

    objeto = this.props.item
    objeto['categoria'] = categorita
    //const newCat= categorita;
    this.setState({
      //categoria:newCat,
      objeto
    });
  }
  desFun = (descripcion) => {
    objeto = this.props.item
    objeto['descri'] = descripcion
    this.setState({objeto});
  }

  valorfun = (valorcito) => {

    objeto = this.props.item
    objeto['cantidad'] = valorcito

    this.setState({objeto});
  }

  fechafun = (fechita) => {
    const newFech = fechita;
    this.setState({fecha: newFech});
  }

  /*valorObje=()=>{
    Object.keys(this.props.item).map(function (key) {
      var item = this.state.items[key]
      // ...
    })
  }*/




  aceptar = () => {
    this.props.update(this.state.objeto)

     }

  _renderModalContent = () => (
    <View style={styles.rootContainer}>

      <CardItem header>
        <Text>Editar gasto</Text>
      </CardItem>

      <List>
        <ListItem icon>
          <Left>
            <Icon name="calculator" style={styles.icon}/>
          </Left>
          <Body>
          <Valores valores={this.props.item.cantidad}  valorfun={this.valorfun}/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="calendar"/>
          </Left>
          <Body>
            <Fecha fechafun={this.fechafun}/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
          {this.state.icono == null ?<Icon name={this.props.item.iname}/>:<Icon name={this.props.item.iname}/>}

          </Left>
          <Body>
            <Modalcat cate={this.props.item.categoria} cateFun={this.cateFun} conFun={this.conFun} iFun={this.iFun}/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="paper"/>
          </Left>
          <Body >
            <Input style={styles.input} placeholder={this.props.item.descri} onChangeText={this.desFun}/>
          </Body>
        </ListItem>
      </List>

      <View style={styles.view}>
        <Button transparent onPress={this.aceptar}>
          <Text style={styles.texto}>Aceptar</Text>
        </Button>

        <Button transparent onPress={this.props.cancelarMod}>
          <Text style={styles.texto}>Cancelar</Text>
        </Button>
      </View>
    </View>
  );

  render() {
    return (
      <View >

        <Modal isVisible={this.props.visibilidad === 2}>
          {this._renderModalContent()}
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    borderRadius: 5
  },


  icon: {
    color: '#ff5722'
  },
  input: {
    marginLeft: 10,
    color: '#757575'
  },
  texto: {

    color: '#4DA49B'
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 10
  }
 });
