import React, {Component} from 'react';
import {Image, StyleSheet, View, ListView, ScrollView, Text} from 'react-native';
import {Spinner} from 'native-base';
import NoticiaDetalle from './NoticiaDetalle';

class tabTwo extends Component {
  state = { noticias: [], loading: false };

  componentWillMount() {
    fetch('http://planb.com.mx/?json=get_recent_posts').then((response) => response.json())
      .then(responseJson => {
        this.setState({ noticias: responseJson.posts, loading: true });
      });
      console.log(this.state.loading);
  }

  renderNoticias() {
    console.log(this.state.loading);
    if(this.state.loading == false){
      return <View><Spinner color='#4DA49B' /><Text style={{alignSelf:'center'}}>Cargando...</Text></View>
    }else{
      return this.state.noticias.map(noticia =>
        <NoticiaDetalle key={noticia.title} noticia={noticia} />
      );
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderNoticias()}
      </ScrollView>
    );
  }
}

export default tabTwo;
