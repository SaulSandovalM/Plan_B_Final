import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Left, Body} from 'native-base';
import HtmlText from 'react-native-html-to-text';
import Depositar from './Depositar';
import EditarAhorro from './EditarAhorro';
import imgLogo from '../../assets/imgs/Ahorros.png';

const AhorroRecycler = ({ noticia }) => {
  const { title, date, content, url } = noticia;
  const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, imageStyle } = styles;
  return (
    <Card>
      <CardItem cardBody>
        <Image source={imgLogo} style={styles.img}/>
      </CardItem>
      <CardItem>
        <Body style={styles.body}>
          <Text style={styles.texto}>Celular</Text>
          <Text style={styles.text}>Llevas $100.00 de $2,500.00</Text>
        </Body>
      </CardItem>
      <CardItem>
        <EditarAhorro/>
        <Depositar/>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 75,
    width: '100%',
    flex: 1
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    flexDirection: 'column'
  },
  text: {
    fontSize: 16,
    color: "rgb(35,86,160)"
  }
});
export default AhorroRecycler;
