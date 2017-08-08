import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem, Text, Button, Left, Body} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/ingreso.jpg';

export default class Tips extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
          <CardItem>
            <Left>
              <Body>
                <Text>Nombre de la noticia</Text>
                <Text note>Abril 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={imgLogo} style={styles.img}/>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>Plan B</Text>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  }
});

module.export = Tips;
