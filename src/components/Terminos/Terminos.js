import React, {Component} from 'react';
import {StyleSheet, View, BackHandler} from 'react-native';
import {CheckBox, Button, Body, List, CardItem, ListItem, Container, Content, Text, Item, StyleProvider, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera3 from '../Cabecera/Cabecera3';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

class Terminos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
    };
  }

  chec1() {
    this.setState({
      check1: !this.state.check1
    });
  }

  chec2() {
    this.setState({
      check2: !this.state.check2
    });
  }

  chec3() {
    this.setState({
      check3: !this.state.check3
    });
  }

  chec4() {
    this.setState({
      check4: !this.state.check4
    });
  }

  chec5() {
    this.setState({
      check5: !this.state.check5
    });
  }

  chec6() {
    this.setState({
      check6: !this.state.check6
    });
  }

  toggle() {
    if (this.state.selected == false || this.state.check1 == false || this.state.check2 == false || this.state.check3 == false || this.state.check4 == false || this.state.check5 == false || this.state.check6 == false) {
      this.setState({selected: true, check1: true, check2: true, check3: true, check4: true, check5: true, check6: true});
    } else {
      this.setState({
        selected: !this.state.selected,
        check1: !this.state.check1,
        check2: !this.state.check2,
        check3: !this.state.check3,
        check4: !this.state.check4,
        check5: !this.state.check5,
        check6: !this.state.check6
      });
    }
  }

  close() {
    BackHandler.exitApp()
  }

  entry() {
    if (this.state.selected == true && this.state.check1 == true && this.state.check2 == true && this.state.check3 == true && this.state.check4 == true && this.state.check5 == true && this.state.check6 == true) {
      Actions.Login()
    } else {
      Toast.show({text: 'Acepta todos los términos y condiciones', position: 'bottom', duration: 2000, type: 'danger'})
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.back}>
          <Cabecera3/>
          <Content>

            <CardItem header>
              <Text style={styles.font}>TÉRMINOS Y CONDICIONES</Text>
            </CardItem>

            <CardItem>
              <Body>

                <List style={styles.list}>
                  <Text>Pulse los vínculos a continuación y léalos atentamente. Al marcar las casillas, usted reconoce
                    que ha leído y que acepta los siguientes términos:</Text>
                  <ListItem style={styles.ListItem}>
                    <CheckBox checked={this.state.selected} onPress={this.toggle.bind(this)}/>
                    <View style={styles.view}>
                      <Text>Acepto todo</Text>
                    </View>
                  </ListItem>
                </List>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check1} onPress={this.chec1.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Derechos de Propiedad.</Text>
                  </View>
                </ListItem>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check2} onPress={this.chec2.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Licencia Limitada.</Text>
                  </View>
                </ListItem>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check3} onPress={this.chec3.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Uso Prohibido.</Text>
                  </View>
                </ListItem>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check4} onPress={this.chec4.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Marcas Comerciales.</Text>
                  </View>
                </ListItem>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check5} onPress={this.chec5.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Información del Usuario.</Text>
                  </View>
                </ListItem>

                <ListItem style={styles.listItem}>
                  <CheckBox checked={this.state.check6} onPress={this.chec6.bind(this)}/>
                  <View style={styles.view2}>
                    <Text>Sitios Web de Terceros.</Text>
                  </View>
                </ListItem>

                <Button rounded block onPress={this.entry.bind(this)} style={styles.boton}>
                  <Text style={styles.text}>Acepto</Text>
                </Button>

                <Button rounded block onPress={this.close.bind(this)} style={styles.boton2}>
                  <Text>No acepto</Text>
                </Button>

              </Body>
            </CardItem>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  font: {
    fontWeight: 'bold'
  },
  list: {
    borderBottomWidth: 2,
    borderBottomColor: '#4DA49B'
  },
  listItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  view: {
    left: 15
  },
  view2: {
    left: 10,
  },
  boton: {
    backgroundColor: '#4DA49B',
    top: 6,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  boton2: {
    backgroundColor: 'gray',
    top: 6,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  check: {
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold'
  }
});

export default Terminos;
