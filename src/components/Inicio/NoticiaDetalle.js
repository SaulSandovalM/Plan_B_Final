import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Left, Body} from 'native-base';
import HtmlText from 'react-native-html-to-text';

const NoticiaDetalle = ({ noticia }) => {
  const { title, date, excerpt, url } = noticia;
  const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, imageStyle } = styles;
  return (

    <Card style={styles.card}>
      <CardItem>
        <Left>
          <Body>
            <Text>{title}</Text>
            <Text note>{date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{
            uri: 'http://planb.com.mx/wp-content/themes/buildingTheme/images/21244656_861780077314641_593729245_n.png'
          }} style={styles.img}/>
        <HtmlText html={excerpt} style={{marginBottom: 0}}/>
        <Text onPress={() => Linking.openURL(url)}>
          Visita nuestro blog
        </Text>
        </Body>
      </CardItem>

    </Card>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  img: {
    height: 125,
    width: '100%'
  },
  card: {
    flex: 0,
    marginTop: 5,
    marginBottom: 5
  },
  truncate: {
    flex: 1
  }
});
export default NoticiaDetalle;
