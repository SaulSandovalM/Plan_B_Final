import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Header, Icon, Title, Picker, Item, Fab, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Gastos.png';

export default class Gastos extends Component {
  constructor(props) {
    super(props);
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
        <Cabecera2/>
        <Content>

        <Image source={imgLogo} style={styles.img}/>

          <Title style={styles.title}>Gastos</Title>

          <View style={styles.inputStyle}>

            <Item rounded style={styles.input}>
              <Input placeholder='$' keyboardType='numeric'/>
            </Item>

            <Picker iosHeader="Select one" mode="dropdown" selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)} style={styles.picker}>
              <Item label="Alimentos" value="key0"/>
              <Item label="Renta" value="key1"/>
              <Item label="Trasporte" value="key2"/>
              <Item label="Escuela" value="key3"/>
              <Item label="Casa" value="key4"/>
            </Picker>

          </View>

          <View style={styles.inputStyle}>
            <Item rounded style={styles.input}>
              <Input placeholder='$' keyboardType='numeric'/>
            </Item>

            <Picker iosHeader="Select one" mode="dropdown" selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)} style={styles.picker}>
              <Item label="Alimentos" value="key0"/>
              <Item label="Renta" value="key1"/>
              <Item label="Trasporte" value="key2"/>
              <Item label="Escuela" value="key3"/>
              <Item label="Casa" value="key4"/>
            </Picker>

          </View>

        </Content>

        <Fab active={this.state.active} direction="up" containerStyle={{}}
          style={styles.fab} position="bottomRight">
          <Icon name="add"/>
        </Fab>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080',
    flexDirection: 'row'
  },
  input: {
    marginTop: 10,
    borderColor: '#f08080',
    height: 40,
    width: 150
  },
  back: {
    backgroundColor: "white"
  },
  img: {
    height: 200,
    width: '100%'
  },
  title: {
    top: 10,
    color: "black"
  },
  picker: {
    width: 100,
    top: 6
  },
  fab: {
    backgroundColor: '#5067FF'
  }
});

module.export = Gastos;
