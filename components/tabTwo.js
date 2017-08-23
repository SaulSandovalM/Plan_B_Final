import React, {Component} from 'react';
import {Image, StyleSheet, View, ListView} from 'react-native';
import {Container, Content, Card, CardItem, Thumbnail, Text, Left, Body} from 'native-base';
import ActionSheet from 'react-native-actionsheet';

/*const options = ['Cancel', 'Femenino', 'Masculino']
const title = '¿Cual es tu sexo?'
const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4*/

export default class tabTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      isLoading: true,
      profiles: []
    }
  }

  /*componentDidMount() {
      return fetch('http://planb.com.mx/?json=get_recent_posts')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.posts)
        }, function() {
          // do something with new state
        });
      }).catch((error) => {
        console.error(error);
      });
    }*/

  render() {
    /*if (this.state.isLoading) {
      return (
        <View style={styles.view2}></View>
      );
    }*/

    return (
      <Container style={styles.back}>
        <Content>
          {/*<ListView dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.posts.title}, {rowData.posts.content}</Text>}/>*/}
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={{
                  uri: 'https://avatars1.githubusercontent.com/u/20559576?v=4&s=460'
                }}/>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={{
                  uri: 'https://avatars1.githubusercontent.com/u/20559576?v=4&s=460'
                }}/>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={{
                  uri: 'https://avatars1.githubusercontent.com/u/20559576?v=4&s=460'
                }}/>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        {/*<ActionSheet ref={o => this.ActionSheet = o} title={title} options={options}
          cancelButtonIndex={CANCEL_INDEX} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={this.handlePress}/>*/}

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
