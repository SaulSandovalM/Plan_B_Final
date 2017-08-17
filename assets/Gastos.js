
  import React, { Component } from 'react';
  import {StyleSheet} from 'react-native';
  import { Container, Header, Content, List, Title, ListItem, Text } from 'native-base';
  import Listconte from './Listconte';
  import Cabecera2 from './Cabecera2';
  import Modalgasto from '../components/Modalgasto';
  import * as firebase from 'firebase';

  export default class Gasto extends Component {
    constructor(){
      super();
      this.state={
        nuevo:'',
        lista:[ ]
      }
    }

    addItem=(datos)=>{
      this.state.lista.push(datos)
      this.setState({lista:this.state.lista})
      console.log(this.state.lista)
      firebase.database().ref('gastos').push(datos);
    }

    listenForItems = (itemsRef) => {
      itemsRef.on('value', (snap) => {

        // get children as an array
        var lista = [];
        snap.forEach((child) => {
          lista.push({
            iname: child.val().iname,
            categoria: child.val().categoria,
            descri:child.val().descri,
            cantidad:child.val().cantidad,
            id: child.key
          });
        });

        this.setState({
          lista: lista
        });

      });
    }

    componentDidMount() {
    const itemsRef = firebase.database().ref('gastos');
    this.listenForItems(itemsRef);
  }





    render() {
      return (
        <Container>
        <Cabecera2/>

          <Content>
          <Title style={styles.titulo}>Gastos</Title>
          <Listconte lista={this.state.lista}  />
          </Content>
          <Modalgasto agregar={this.addItem}/>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
  titulo: {
    top: 15,
    color:'red'
  },
  list: {
    top: 15
  }
});
