import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Right, Title, Fab, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Cabecera2 from './Cabecera2';
import Modalgasto from '../components/Modalgasto';

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () =>
<Swiper style={styles.wrapper} showsButtons>
  <View style={styles.slide1}>
    <Container style={styles.back}>
      <Cabecera2/>
      <Content>
        <Title style={styles.titulo}>Gastos</Title>
      <List style={styles.list}>
          <ListItem>
            <Text>Entretenimiento</Text>
              <Right>
                <Text>$1200.00</Text>
              </Right>
          </ListItem>
          <ListItem>
            <Text>Trasporte</Text>
              <Right>
                <Text>$50.00</Text>
              </Right>
          </ListItem>
          <ListItem>
            <Text>Casa</Text>
              <Right>
                <Text>$1245.00</Text>
              </Right>
          </ListItem>
        </List>
      </Content>
      <Modalgasto/>

    </Container>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Beautiful</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
</Swiper>
