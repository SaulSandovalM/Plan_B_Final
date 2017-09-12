import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, List, Text,Button} from 'native-base';
import Listconte from './Listconte';
import CabeceraGen from '../Cabecera/CabeceraGen';
import Modalgasto from '../Modal/Modalgasto';
import Modaleditar from '../ModalEdit/ModalEditgasto';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import DatePicker from 'react-native-datepicker';
import Nogasto from './Nogasto';

export default class Gasto extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = true;
    this.state = {
      lista: [],
      date: new Date(),
      visibleModal:null,
      cancel:null,
      item:{},

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
      this.setState({lista: lista});
    });
  }
  editKey=(key)=>{
    this.setState({item:key})
    console.log(key)
  }
  editFun=(vismod)=>{
    newEstado = vismod;
    this.setState({visibleModal: newEstado})

  }
valores=()=>{
  /*let objeto=this.state.item
  Object.keys(objeto).map(function (key) {
    var item = objeto[cantidad]
  console.log(item)
  */
  console.log(this.state.item.cantidad)


}
  update=(datos)=>{
    let item = this.state.item
    item=datos
    this.setState({item: item})
    console.log(this.state.item)


    firebaseAuth.onAuthStateChanged(function(user) {
      let updates = {};
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      firebase.database().ref('usuarios/' + uid + '/gastos/' + datos.id).update(datos);
      //Esta linea coloca valor nulo en el element que se seleccione
    });
    this.setState({visibleModal:null})
  }


  cancelarMod=()=>{
    this.setState({visibleModal:null})
  }
  borrar = (item) => {
    console.log(item)
    let updates = {};
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      firebase.database().ref('usuarios/' + uid + '/gastos/' + item.id).set(null);
      //Esta linea coloca valor nulo en el element que se seleccione
    });
  }

  render() {

    var Gasto = this.state.lista.length < 1
      ? <Nogasto/>
      : <Listconte lista={this.state.lista}
            borrar={this.borrar}
            editFun={this.editFun}
            editKey={this.editKey}/>;
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='GASTOS'/>
        <View style={styles.view}>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
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
          borderColor: 'white'
        },
        dateText: {
          color: '#424242'
        }
      }} onDateChange={() => {
        this.setState({date: date})
      }}/>
        </View>

        <Content>
          {Gasto}
        </Content>
        <Modalgasto style={styles.lista} agregar={this.addItem}/>
        <Modaleditar visibilidad={this.state.visibleModal}
                      item={this.state.item}
                      iname={this.state.item.iname}
                      style={styles.lista}
                      editar={this.editar}
                      cancelarMod={this.cancelarMod}
                      update={this.update}/>

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
    backgroundColor: 'color: rgb(240,116,75)'
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
