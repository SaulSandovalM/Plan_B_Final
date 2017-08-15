import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {Container, Content, Card, CardItem, Body, Icon, Right, Button} from 'native-base';
import Footers from '../assets/Footers';
import {Actions} from 'react-native-router-flux';
import Grafica from '../assets/Grafica';
import Boton from '../assets/Boton';

export default class tabOne extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>
        <Card style={styles.card}>
        <CardItem header>
            <Text>Tus Gastos</Text>
          </CardItem>
        <CardItem>
          <Icon style={{color:'green'}} active name="md-arrow-round-down" />
          <Text>Ingresos</Text>
          <Right>
            <Text style={{color:'green'}}>$0.00</Text>
          </Right>
         </CardItem>
         <CardItem>
           <Icon style={{color:'red'}} active name="md-arrow-round-up" />
           <Text>Gastos</Text>
           <Right>
             <Text style={{color:'red'}}>$0.00</Text>
           </Right>
          </CardItem>
          <CardItem>
            <Icon style={{color:'blue'}} active name="ios-cash" />
            <Text>Ahorros</Text>
            <Right>
              <Text style={{color:'blue'}}>$0.00</Text>
            </Right>
           </CardItem>
        </Card>

        <Card style={styles.card}>
          <CardItem header>
            <Text style={styles.texto}>Historia</Text>
          </CardItem>
          <CardItem style={styles.cardi}>
          <Icon style={{color:'blue'}} active name="ios-pie-outline"/>
          <Text>Registra tu primer Ingresos</Text>

          </CardItem>

        </Card>

          <View style={styles.align}>
            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ingresos()} style={styles.boton}>
                <Image source={require('../imgs/Ingresos.png')} style={styles.img}/>
              </Button>
              <Text>Ingresos</Text>
            </Card>

            <Card style={styles.borde}>
              <Button style={styles.boton} transparent onPress={() => Actions.Gastos()}>
                <Image source={require('../imgs/Gastos.png')} style={styles.img}/>
              </Button>
              <Text>Gastos</Text>
            </Card>

            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ahorros()} style={styles.boton}>
                <Image source={require('../imgs/Ahorros.png')} style={styles.img}/>
              </Button>
              <Text>Ahorros</Text>
            </Card>
          </View>

          <Boton/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  card: {
    alignItems: 'center',
    height: 250
  },
  card2: {
    alignItems: 'center',
    height: 200
  },
  cardi: {
    alignItems: 'center'
  },
  boton: {
    alignSelf: 'center'
  },
  texto: {
    color: "green",
    fontSize: 12
  },
  color: {
    color: "green"
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  borde: {
    width: '33%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 50,
    height: 50
  }
});

module.export = tabOne;
