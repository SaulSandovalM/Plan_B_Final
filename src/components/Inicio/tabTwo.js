import React, {Component} from 'react';
import {Image, StyleSheet, View, ListView, ScrollView} from 'react-native';
import NoticiaDetalle from './NoticiaDetalle';

class tabTwo extends Component {
  state = { noticias: [] };

  componentWillMount() {
    fetch('http://planb.com.mx/?json=get_recent_posts').then((response) => response.json())
      .then(responseJson => {
        console.log(responseJson.posts);
        this.setState({ noticias: responseJson.posts });
      }, error => {
        console.log(error);
      });
  }

  renderNoticias() {
    return this.state.noticias.map(noticia =>
      <NoticiaDetalle key={noticia.title} noticia={noticia} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderNoticias()}
      </ScrollView>
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

export default tabTwo;
