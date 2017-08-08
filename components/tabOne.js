import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {Container, Content, Card, CardItem, Body, Icon, Button} from 'native-base';
import Footers from '../assets/Footers';
import {Actions} from 'react-native-router-flux';
import Grafica from '../assets/Grafica';

export default class tabOne extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Card style={styles.card}>
            <CardItem header>
              <Text>Ser mas ahorrativo</Text>
            </CardItem>

            <CardItem footer>
              <Text style={styles.color}>0%</Text>
            </CardItem>
          </Card>

          <Card style={styles.card2}>
            <CardItem header>
              <Icon active name="chatbubbles"/>
              <Text style={styles.texto}>Dinero</Text>
            </CardItem>
            <CardItem style={styles.cardi}>
              <Text>
                Es hora de ahorrar
              </Text>
            </CardItem>
            <CardItem footer>
              <Text>0 ----- 6 ----- 12 ----- 16 ----- 18 ----- 24</Text>
            </CardItem>
          </Card>

          <View style={styles.align}>
            <Card style={styles.borde}>
              <Button iconLeft transparent onPress={() => Actions.Ingresos()} style={styles.boton}>
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
              <Button iconLeft transparent onPress={() => Actions.Ahorros()} style={styles.boton}>
                <Image source={require('../imgs/Ahorros.png')} style={styles.img}/>
              </Button>
              <Text>Ahorros</Text>
            </Card>
          </View>
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
