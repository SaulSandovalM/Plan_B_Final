import React, {Component} from 'react';
import {StyleSheet, View, Image, ListView, ActivityIndicator} from 'react-native';
import {Form, Label, List, ListItem, Container, Content, Text, Item, Input, Icon, Card} from 'native-base';
import ActionSheet from 'react-native-actionsheet';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Imagen from './Imagen';
import CabeceraGen from '../Cabecera/CabeceraGen';
import img from '../../assets/imgs/us.jpeg';
import ProductoDetalle from './ProductoDetalle';
const options = ['Cancel', 'Femenino', 'Masculino'];
const title = '¿Cual es tu sexo?';
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4;

class Perfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      profiles: [],
      email: '',
      productos: []
    }
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
  }

  showActionSheet() {
    this.ActionSheet.show()
  }

  handlePress(i) {
    this.setState({selected: i})
  }

  componentWillMount() {
    const {currentUser} = firebaseAuth;
    name = currentUser.displayName;
    email= currentUser.email;
    if(currentUser.photoURL == null){
      image = 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
    }else{
      image = currentUser.photoURL;
    }
    if(currentUser.displayName == null){
      name = currentUser.email
    }else{
      name = currentUser.displayName
    }

    return fetch('https://ronchon-choucroute-16574.herokuapp.com/api/polizas.json').then((response) => response.json())
    .then((responseJson) => {
      this.setState({productos: responseJson})
      console.log(responseJson)
      });
  }

  renderProductos(){
    return this.state.productos.map(producto =>
      <ProductoDetalle key={producto.id} producto={producto} />
    );
  }

  render() {
    return (
      <Container>
        <CabeceraGen headerText='PERFIL'/>
        <Content>
          <View style={styles.view}>
            <Image style={styles.img} source={img}/>
          </View>
          <Imagen/>

          <List>
            <ListItem itemDivider style={styles.listItem}>
              <Text>INFORMACIÓN BÁSICA</Text>
            </ListItem>

            <ListItem>
              <Icon name='ios-person'/>
              <Input style={styles.text} placeholder={name}/>
            </ListItem>

            <ListItem>
              <Icon name='ios-mail'/>
              <Text style={styles.text}>{email}</Text>

            </ListItem>

            <ListItem itemDivider>
              <Text>Datos de usuario</Text>
            </ListItem>

            <Form>
              <Item floatingLabel onPress={this.showActionSheet}>
                <Label>Sexo</Label>
                <Input disabled value={options[this.state.selected]}/>
              </Item>

              <Item floatingLabel last>
                <Label>Edad</Label>
                <Input keyboardType='numeric'/>
              </Item>
            </Form>

            <ListItem itemDivider>
              <Text>Tus Productos</Text>
            </ListItem>
          </List>

          {this.renderProductos()}

          <ActionSheet ref={o => this.ActionSheet = o} title={title} options={options}
            cancelButtonIndex={CANCEL_INDEX} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={this.handlePress}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.6,
    height: null,
    width: null
  },
  view2: {
    flex: 1,
    paddingTop: 20
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    marginLeft: 10
  }
})

export default Perfil;
