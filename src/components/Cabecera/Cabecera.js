import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, Right, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgLogo from '../../assets/imgs/planb.png';
import {firebaseAuth} from '../Firebase/Firebase';

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
          <TouchableOpacity style={styles.touchMargin} onPress={() => Actions.Tips()}>
            <Icon name='pin' style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchMargin} onPress={() => Actions.Perfil()}>
            <Icon name='person' style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchMargin} onPress={this.salir.bind(this)}>
            <Icon name='close' style={styles.icon}/>
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
  color: {
    color: "green"
  },
  image: {
    width: 120,
    height: 40,
    top: 5
  },
  icon: {
    color: 'green'
  },
  touchMargin:{
    marginRight: 15
  }
});

module.export = Cabecera;
