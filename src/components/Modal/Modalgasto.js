import React, {Component} from 'react';
import {Container, Text, Button, CardItem, List, Left, ListItem, Body, Icon, Fab, Input,Form} from 'native-base';

import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../estilos/Modgast.style';
import Valores from './Modal';
import Fecha from './Fecha';
import Modalcat from './Modalcat';

export default class Example extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModal: null,

      objeto: {},
      fecha: '',
      icono: 'add'
    };
  }

  conFun = (iconito) => {
    objeto = this.state.objeto
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
    objeto = this.state.objeto
    objeto['categoria'] = categorita
    //const newCat= categorita;
    this.setState({
      //categoria:newCat,
      objeto
    });
  }

  desFun = (descripcion) => {
    objeto = this.state.objeto
    objeto['descri'] = descripcion
    this.setState({objeto});
  }

  valorfun = (valorcito) => {
    objeto = this.state.objeto
    objeto['cantidad'] = valorcito
    this.setState({objeto});
  }

  fechafun = (fechita) => {
    const newFech = fechita;
    this.setState({fecha: newFech});
  }

  cancelar = () => {
    this.setState({visibleModal: null});
  }
  aceptar = () => {


      this.props.agregar(this.state.objeto),
      this.setState({visibleModal: null});
  

  }

  _renderModalContent = () => (
    <View style={styles.rootContainer}>

      <CardItem header>
        <Text>Nuevo gasto</Text>
      </CardItem>

    <Form>
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
            <Icon name="calendar"/>
          </Left>
          <Body>
            <Fecha fechafun={this.fechafun}/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name={this.state.icono}/>
          </Left>
          <Body>
            <Modalcat cateFun={this.cateFun} conFun={this.conFun} iFun={this.iFun}/>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="paper"/>
          </Left>
          <Body >
            <Input style={styles.input} placeholder='Descripción' onChangeText={this.desFun}/>
          </Body>
        </ListItem>
      </List>

      <View style={styles.view}>
        <Button transparent onPress={this.aceptar}>
          <Text style={styles.texto}>Aceptar</Text>
        </Button>

        <Button transparent onPress={this.cancelar}>
          <Text style={styles.texto}>Cancelar</Text>
        </Button>
      </View>
       </Form>
    </View>
  );

  render(){
     return (
       <View >


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
