import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Form, Label, List, ListItem, Container, Content, Text, Item, Input, Icon} from 'native-base';
import ActionSheet from 'react-native-actionsheet';
import Imagen from './Imagen';
import Cabecera2 from './Cabecera2';
const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = ['Cancel', 'Femenino', 'Masculino']
const title = '¿Cual es tu sexo?'

class Perfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
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

  render() {
    return (
      <Container>
        <Cabecera2/>
        <Content>
          <View style={styles.view}>
            <Image style={styles.img}
            source={{uri: 'https://ae01.alicdn.com/kf/HTB1YU0LRVXXXXbUXXXXq6xXFXXXz/1PC-Personalise-Square-piggy-bank-Logbook-Series-font-b-Tin-b-font-Plate-box-font-b.jpg'}}/>
          </View>
          <Imagen/>

          <List>
            <ListItem itemDivider>
              <Text>Info</Text>
            </ListItem>

            <ListItem >
              <Input disabled placeholder='Saul Sandoval M'/>
              <Icon name='information-circle'/>
            </ListItem>

            <ListItem>
              <Input disabled placeholder='saul@prueba.com'/>
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
              <Text>Cuentas</Text>
            </ListItem>
          </List>

          <ActionSheet ref={o => this.ActionSheet = o} title={title} options={options}
            cancelButtonIndex={CANCEL_INDEX} destructiveButtonIndex={DESTRUCTIVE_INDEX} onPress={this.handlePress}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.6
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  }
})

export default Perfil;
