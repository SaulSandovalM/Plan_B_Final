import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Left, Body} from 'native-base';
import HtmlText from 'react-native-html-to-text';

const ProductoDetalle = ({ producto }) => {
  const { username, fecha_poliza, rsocial } = producto;
  const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, imageStyle } = styles;
  return (

    <Card style={styles.card}>
      <CardItem>

          <Body>
            <Text>{username}</Text>
            <Text>{fecha_poliza}</Text>
            <Text>{rsocial}</Text>
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
export default ProductoDetalle;
