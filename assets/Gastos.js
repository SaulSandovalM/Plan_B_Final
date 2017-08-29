import React, { Component } from 'react';
  import {StyleSheet, View} from 'react-native';
  import { Container, Header, Content, List, Title, ListItem, Text} from 'native-base';
  import Listconte from './Listconte';
  import CabeceraGen from './CabeceraGen';
  import Modalgasto from '../components/Modalgasto';
  import firebase, {firebaseAuth} from './Firebase';
  import DatePicker from 'react-native-datepicker';

  export default class Gasto extends Component {

  render() {
    return (
      <Container style={styles.back}>
        <CabeceraGen headerText='GASTOS'/>

        <View style={styles.view}>
          <DatePicker
            style={{width: 150, alignItems: 'center'}}
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
              dateText:{
                color:'#000'
              },
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>

          <Content>
         <Listconte  lista={this.state.lista} borrar={this.borrar} />
          </Content>
          <Modalgasto style={styles.lista} agregar={this.addItem}/>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
  titulo: {
    top: 10,
    color:'black'
  },
  list: {
    top: 15
  },
  back: {
    backgroundColor: 'white'
  },
  lista:{
    backgroundColor:'blue'
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  }
});
