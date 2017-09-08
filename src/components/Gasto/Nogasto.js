import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Thumbnail, Text} from 'native-base';
import imgNoGastos from '../../assets/imgs/nogasto.jpg';

export default class NoHaygasto extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Thumbnail square source={imgNoGastos}/>
        <Text>Ingresa tu primer gasto</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column'

  }
});
