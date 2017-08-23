import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import Listconte from './Listconte';
import CabeceraGastos from './CabeceraGastos';
import Modalgasto from '../components/Modalgasto';
import firebase, {firebaseAuth} from './Firebase';
import DatePicker from 'react-native-datepicker';

export default class Gasto extends Component {
  constructor() {
    super();
    this.state = {
      nuevo: '',
      lista: [],
      selected1: "key1",
      text: '$',
      date: new Date()
    }
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
  }

  addItem = (datos) => {
    this.state.lista.push(datos)
    this.setState({lista: this.state.lista})
    console.log(this.state.lista)

    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(uid)

      firebase.database().ref('usuarios/' + uid + '/gastos').push(datos);

    });

  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      snap.forEach((child) => {
        lista.push({iname: child.val().iname, categoria: child.val().categoria, descri: child.val().descri, cantidad: child.val().cantidad, id: child.key});
      });

      this.setState({lista: lista});

    });
  }

  componentWillMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
        var key = user.key;
      }
      console.log(uid)
      console.log(key)
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/gastos');
      that.listenForItems(itemsRef);
    });
  }

  componentDidMount() {}

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGastos/>
        <View style={styles.view}>
          <DatePicker style={{
            width: 150,
            alignItems: 'center'
          }} date={this.state.date} mode="date" showIcon={false} placeholder="select date" format="YYYY-MM-DD"
          minDate="2017-01-01" maxDate="2030-01-01" confirmBtnText="Confirm" cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              alignItems: 'flex-start',
              marginLeft: 15,
              borderColor: 'green',
              borderRadius: 50,
              alignItems: 'center'
            },
            dateText: {
              color: '#000'
            }
          }} onDateChange={(date) => {
            this.setState({date: date})
          }}/>
        </View>

        <Listconte lista={this.state.lista}/>
        <Modalgasto agregar={this.addItem}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    top: 15
  },
  back: {
    backgroundColor: 'white'
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  }
});
