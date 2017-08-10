import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, ListView, ActivityIndicator} from 'react-native';
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
      selected: '',
      isLoading: true
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

  componentDidMount() {
    return fetch('https://ronchon-choucroute-16574.herokuapp.com/api/profiles.json').then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson)
      }, function() {
        // do something with new state
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.view2}></View>
      );
    }

    return (
      <Container>
        <Cabecera2/>
        <Content>
          <View style={styles.view}>
            <Image style={styles.img} source={{
              {rowData.}
            }}/>
          </View>
          <Imagen/>

          <List>
            <ListItem itemDivider>
              <Text>Info</Text>
            </ListItem>

            <ListItem >
              <Input placeholder='Saul'/>
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
              <View style={styles.view2}>
                <ListView dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData.username}, {rowData.email}</Text>}/>
              </View>
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
  view2: {
    flex: 1,
    paddingTop: 20
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  }
})

export default Perfil;
