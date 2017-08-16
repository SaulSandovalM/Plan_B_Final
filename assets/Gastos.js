import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Right, Title, Fab, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera2 from './Cabecera2';
import Modalgasto from '../components/Modalgasto';
import DatePicker from 'react-native-datepicker';

export default class Gastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      text: '$',
      date: new Date()
    };
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
  }

  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
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
        <Content style={styles.back}>
          <Title style={styles.titulo}>Gastos</Title>
        <List style={styles.list}>
            <ListItem>
              <Text>Entretenimiento</Text>
                <Right>
                  <Text>$1200.00</Text>
                </Right>
            </ListItem>
            <ListItem>
              <Text>Trasporte</Text>
                <Right>
                  <Text>$50.00</Text>
                </Right>
            </ListItem>
            <ListItem>
              <Text>Casa</Text>
                <Right>
                  <Text>$1245.00</Text>
                </Right>
            </ListItem>
          </List>
        </Content>
        <Modalgasto/>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  titulo: {
    top: 15,
    color: 'black'
  },
  list: {
    top: 15
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  }
});

module.export = Gastos;
