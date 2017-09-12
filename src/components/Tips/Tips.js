import React, {Component} from 'react';
import {StyleSheet, Linking} from 'react-native';
import {Container, Content, Text, Left, Body, List, ListItem, Thumbnail, Right} from 'native-base';
import CabeceraGen from '../Cabecera/CabeceraGen';
import imgLogo from '../../assets/imgs/planb.png';

export default class Tips extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='TIPS'/>
        <Content onPress={() => Linking.openURL(url)}>
          <List>
            <ListItem avatar>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
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
