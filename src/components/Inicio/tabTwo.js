import React, {Component} from 'react';
import {Image, StyleSheet, View, ListView} from 'react-native';
import {Container, Content, Card, CardItem, Text, Left, Body} from 'native-base';
import ActionSheet from 'react-native-actionsheet';

export default class tabTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      isLoading: true,
      profiles: []
    }
  }

  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Noticia 1</Text>
                  <Text note>Mar 19 de Julio, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{
                  uri: 'https://dm6jf9380nk1h.cloudfront.net/thumbor/NsBlFRM7rbPiDiiLP8dpboTJ-WQ=/1200x0/filters:no_upscale()/https://dm6jf9380nk1h.cloudfront.net/article/ec6533aa-e4ff-4b6a-9c47-7a5f3caeccaf.jpg'
                }} style={styles.img}/>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Noticia 2</Text>
                  <Text note>Mar 19 de Julio, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{
                  uri: 'https://dm6jf9380nk1h.cloudfront.net/thumbor/NsBlFRM7rbPiDiiLP8dpboTJ-WQ=/1200x0/filters:no_upscale()/https://dm6jf9380nk1h.cloudfront.net/article/ec6533aa-e4ff-4b6a-9c47-7a5f3caeccaf.jpg'
                }} style={styles.img}/>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Noticia 3</Text>
                  <Text note>Mar 19 de Julio, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{
                  uri: 'https://dm6jf9380nk1h.cloudfront.net/thumbor/NsBlFRM7rbPiDiiLP8dpboTJ-WQ=/1200x0/filters:no_upscale()/https://dm6jf9380nk1h.cloudfront.net/article/ec6533aa-e4ff-4b6a-9c47-7a5f3caeccaf.jpg'
                }} style={styles.img}/>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>
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
    width: '100%'
  },
  card: {
    flex: 0
  }
});

module.export = tabTwo;
