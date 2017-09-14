import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, TextInput,Alert} from 'react-native';
import {Container, Content, Button, Right, Input, List, ListItem, Icon, Body, Left} from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Modal from 'react-native-modal';
import Valores from '../Modal/Modal';
import moment from 'moment';

export default class IngresosIntro extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModal: null,
      fecha:new Date(),
      lista: [],
      ingreso:{}
    };
  }

  valorfun = (valorcito) => {
    var date=moment(this.state.fecha).format('YYYY-MM-DD')
    ingreso = this.state.ingreso
    ingreso['cantidad'] = valorcito
    ingreso['fecha']=date
    this.setState({ingreso});
  }
  desFun = (descripcion) => {
    ingreso= this.state.ingreso
    ingreso['descri'] = descripcion
    this.setState({ingreso});
  }

  _renderModalContent = () => (
    <View style={styles.view}>
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
            <Icon name="paper" style={styles.icon}/>
          </Left>
          <Body >
            <Input style={styles.input} placeholder='Descripción' onChangeText={this.desFun}/>
          </Body>
        </ListItem>
      </List>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={this.addItem}>
        <Text style={styles.boton1}>SIGUIENTE</Text>
      </TouchableOpacity>
    </View>
  </View>
  );

  activar = () => {
    this.setState({visibleModal: 1})
  }

  addItem = () => {
 let nuevo = this.state.ingreso
     if(Object.keys(nuevo).length >= 3){

       this.state.lista.push(nuevo);
       this.setState({lista: this.state.lista})
       firebaseAuth.onAuthStateChanged(function(user) {
         if (user) {
           var uid = user.uid;
         }
         firebase.database().ref('usuarios/' + uid + '/ingreso').push(nuevo);
       });
       Actions.GastosIntro()
       this.setState({visibleModal: null});
       this.setState({ingreso: {}})
     }else{
       const message = 'No has llenado todos los campos';
       Alert.alert('Advertencia', message, [{
         text: 'ok',
         onPress: null
       }]);
       console.log(Object.keys(nuevo).length)
     }

  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={this.activar}>
          <Text style={styles.boton}>EMPEZAR</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    fontWeight: 'bold',
    color: "rgb(35,86,160)",
    margin: 10,
    fontSize: 22
  },
  boton1: {
    fontWeight: 'bold',
    color: "rgb(35,86,160)",
    margin: 10
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  },
  view: {
    backgroundColor: 'white',
    borderRadius: 10
  }
});

module.export = IngresosIntro;
