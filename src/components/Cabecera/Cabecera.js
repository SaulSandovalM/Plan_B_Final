import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, Right, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgLogo from '../../assets/imgs/planb.png';
import {firebaseAuth} from '../Firebase/Firebase';
import * as Animatable from 'react-native-animatable';

export default class Cabecera extends Component {
  constructor(props) {
    super(props);
    this.salir = this.salir.bind(this);
  }

  salir() {
    firebaseAuth.signOut();
  }

  render() {
    return (
      <Header style={styles.header}>

        <Image source={imgLogo} style={styles.image}/>

        <Right>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
            onPress={() => Actions.Tips()}>
            <Icon name='md-bulb' style={styles.icon1}/>
          </Animatable.Text>
          <TouchableOpacity style={styles.margin} onPress={() => Actions.Perfil()}>
            <Icon name='person' style={styles.icon2}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchMargin} onPress={this.salir.bind(this)}>
            <Icon name='close' style={styles.icon3}/>
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  image: {
    width: 120,
    height: 40,
    top: 5
  },
  icon1: {
    color: rgb(241,150,90)
  },
  icon2: {
    color: rgb(26,142,158)
  },
  icon3: {
    color: rgb(216,30,86)
  },
  touchMargin:{
    marginRight: 10
  },
  margin: {
    marginRight: 30,
    marginLeft: 20
  }
});

module.export = Cabecera;
