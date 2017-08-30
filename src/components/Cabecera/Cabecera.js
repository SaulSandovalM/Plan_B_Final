import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
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
          <Button transparent onPress={() => Actions.Tips()}>
            <Icon name='pin' style={styles.icon}/>
          </Button>
          <Button transparent onPress={() => Actions.Perfil()}>
            <Icon name='person' style={styles.icon}/>
          </Button>
          <Button transparent onPress={this.salir.bind(this)}>
            <Icon name='close' style={styles.icon}/>
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
    width: 120,
    height: 40,
    top: 5
  },
  icon: {
    color: 'green'
  }
});

module.export = Cabecera;
