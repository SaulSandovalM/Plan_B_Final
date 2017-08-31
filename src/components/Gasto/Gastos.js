import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, List, Text} from 'native-base';
import Listconte from '../Modal/Listconte';
import CabeceraGen from '../Cabecera/CabeceraGen';
import Modalgasto from '../Modal/Modalgasto';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import DatePicker from 'react-native-datepicker';
import Nogasto from './Nogasto';

export default class Gasto extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      NoGas:0,
      lista: [],
      date: new Date()
    }
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
        lista.push({
          iname: child.val().iname,
          categoria: child.val().categoria,
          descri: child.val().descri,
          cantidad: child.val().cantidad,
          id: child.key})
        console.log(child.key);
      });
      if(lista!=null){
        this.setState({NoGas:0}),
        this.setState({lista: lista})
      }else{
        this.setState({NoGas:1})
      }

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

  borrar = (item) => {
    console.log(item)
    let updates = {};
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      firebase.database().ref('usuarios/' + uid + '/gastos/' + item.id).set(null); //Esta linea coloca valor nulo en el element que se seleccione
    });
  }

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='GASTOS'/>
        <View style={styles.view}>
          <DatePicker style={styles.picker}
          date={this.state.date}
          mode="date"
          showIcon={false}
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2017-01-01"
          maxDate="2030-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
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

        <Content>
        {this.state.NoGas == 1
          ? <Nogasto/>
          : <Listconte lista={this.state.lista} borrar={this.borrar}/>
        }

        </Content>
        <Modalgasto style={styles.lista} agregar={this.addItem}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    top: 10,
    color: 'black'
  },
  list: {
    top: 15
  },
  back: {
    backgroundColor: 'white'
  },
  lista: {
    backgroundColor: 'blue'
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  },
  picker: {
    width: 150,
    alignItems: 'center'
  }
});
