import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Container, Header, Content,Thumbnail, Card, CardItem, Text, Body, Left,Right, } from 'native-base';


export default class NoHaygasto extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Thumbnail square source={require('../imgs/gasto.jpg')}/>
        <Text>Ingresa tu primer gasto</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  flex:1,
  
  }

});
