import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Left, Body} from 'native-base';
import HtmlText from 'react-native-html-to-text';

const NoticiaDetalle = ({ noticia }) => {
  const { title, date, content, url } = noticia;
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
            uri: 'https://dm6jf9380nk1h.cloudfront.net/thumbor/NsBlFRM7rbPiDiiLP8dpboTJ-WQ=/1200x0/filters:no_upscale()/https://dm6jf9380nk1h.cloudfront.net/article/ec6533aa-e4ff-4b6a-9c47-7a5f3caeccaf.jpg'
          }} style={styles.img}/>
        <HtmlText html={content} style={{color: red}}/>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text onPress={() => Linking.openURL(url)}>
          Visita nuestro blog
        </Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  img: {
    height: 200,
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
