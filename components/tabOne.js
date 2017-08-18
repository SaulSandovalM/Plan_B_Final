import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Container, Content, Card, CardItem, Body, Icon, Right, Button} from 'native-base';
import Footers from '../assets/Footers';
import {Actions} from 'react-native-router-flux';
import Grafica from '../assets/Grafica';
import AreaSpline from '../js/charts/AreaSpline';
import Pie from '../js/charts/Pie';
import Theme from '../js/theme';
import data from '../resources/data';

type State = {
  activeIndex: number,
  spendingsPerYear: any
}

export default class tabOne extends Component {
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }

  render() {
    const height = 200;
    const width = 500;

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

        <View style={styles.container} >
          <Text style={styles.chart_title}>Distribution of spending this month</Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
          <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
          <AreaSpline
            width={width}
            height={height}
            data={this.state.spendingsPerYear}
            color={Theme.colors[this.state.activeIndex]} />
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
  },
  card2: {
    alignItems: 'center',
  },
  cardi: {
    alignItems: 'center',
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
  },
  container: {
    backgroundColor:'whitesmoke',
    marginTop: 21,
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
  }
});

module.export = tabOne;
