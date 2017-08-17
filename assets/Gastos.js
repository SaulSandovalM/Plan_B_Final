
  import React, { Component } from 'react';
  import {StyleSheet} from 'react-native';
  import { Container, Header, Content, List, Title, ListItem, Text } from 'native-base';
  import Listconte from './Listconte';
  import Cabecera2 from './Cabecera2';
  import Modalgasto from '../components/Modalgasto';
  export default class Gasto extends Component {
    constructor(){
      super();
      this.state={
        nuevo:'',
        lista:[
          {id:1,
          iname:'car',
          categoria:'Trasporte',
          descri:'para que funcione',
          cantidad:'$1,500.00',},
          {id:2,
          iname:'add',
          categoria:'Funcina',
          descri:'hola',
          cantidad:'$1,500.00',},
        ]
      }
    }

    addItem=(datos)=>{
      this.state.lista.push(datos)
      this.setState({lista:this.state.lista})
      console.log(this.state.lista)
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
    top: 15
  },
  list: {
    top: 15
  }
});
