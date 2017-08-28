import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Header, Right, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgLogo from '../../assets/imgs/planb.png';
import {firebaseAuth} from '../Firebase/Firebase';

export default class Cabecera extends Component {
  render() {
    return (
      <Header style={styles.header}>

        <Image source={imgLogo} style={styles.image}/>

        <Right>
          <Button transparent onPress={() => Actions.Tips()}>
            <Icon name='pin' style={styles.icon}/>
          </Button>
          <Button transparent onPress={() => Actions.Perfil()}>
            <Icon name='person' style={styles.icon}/>
          </Button>
          <Button transparent onPress={() => firebaseAuth.signOut()}>
            <Icon name='menu' style={styles.icon}/>
          </Button>
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
    width: 150,
    height: 60
  },
  icon: {
    color: 'green'
  }
});

module.export = Cabecera;
