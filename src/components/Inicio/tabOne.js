import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Card, CardItem, Icon, Right, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import AreaSpline from '../js/charts/AreaSpline';
import Pie from '../js/charts/Pie';
import Theme from '../js/theme';
import imgIngresos from '../../assets/imgs/Ingresos.png';
import imgGastos from '../../assets/imgs/Gastos.png';
import imgAhorros from '../../assets/imgs/Ahorros.png';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import Boton from '../FinanzasEmpezar/Boton';

type State = {
  activeIndex: number
}

export default class tabOne extends Component {
  state : State;

  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      activeIndex: 0,
      gastos:0,
      ingresos:0,
      pIngreso:0,
      pGasto:0,

    };
    console.ignoredYellowBox = [
      'Setting a timer'
  ];
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex
    });
  }


  //componentWillMount lo utilizamos para que busque en la rama especifica del usuario
  componentWillMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(uid)

      const IngreRef = firebase.database().ref('usuarios/'+uid+'/ingreso');
      that.listenForIngre(IngreRef);
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/gastos');
      that.listenForItems(itemsRef);
    });
  }
  //este listenForItems nos hara es sumar todos los gastos ya ingresados y los sacara en una  suma total para poder colocarlos

  listenForIngre(IngreRef) {
    IngreRef.once('value').then(snapshot => {
      if (snapshot.hasChildren()) {
        var ingreso = 0;
        snapshot.forEach(function(ingr) {
          ingreso += ingr.child('cantidad').val();
        });
      }
      if(ingreso==null){
        ingreso=0,
        this.setState({ingresos:ingreso})
      }else{
        this.setState({pIngreso:100}),
        this.setState({ingresos:ingreso})
      }
    });
  }




  listenForItems(itemsRef) {
    itemsRef.once('value').then(snapshot => {
      if (snapshot.hasChildren()) {
        var gasto = 0;
        snapshot.forEach(function(item) {
          gasto += item.child('cantidad').val();
        });
      }
      if (gasto == null) {
        gasto = 0
      }
      this.setState({gastos:gasto});
      if(this.state.pIngreso!=0){
        pGasto=((this.state.gastos * 100)/this.state.ingresos),
          this.setState({pGasto:pGasto}),
          pIngreso=this.state.pIngreso-this.state.pGasto,
          this.setState({pIngreso:pIngreso})
        console.log("Hola bebe")
      }

    });
  }

  render() {
    const height = 200;
    const width = 340;

    return (
      <Container style={styles.back}>
        <Content>
          <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.chart_title}>FINANZAS</Text>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon} active name="md-cash"/>
              <Text style={styles.icon}>Ingresos</Text>
              <Right>
                <Text style={styles.finanzas}>$ {this.state.ingresos}.00</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon2} active name="ios-list-box"/>
              <Text style={styles.icon2}>Gastos</Text>
              <Right>
                <Text style={styles.finanzas2}>$ {this.state.gastos}.00</Text>

              </Right>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon3} active name="star"/>
              <Text style={styles.icon3}>Ahorros</Text>
              <Right>
                <Text style={styles.finanzas3}>$ {this.state.pIngreso}.00</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <View style={styles.container}>
              <Text style={styles.chart_title}>ESTADISTICAS</Text>
              <View style={{alignItems: 'center'}}>
              <Pie
                pieWidth={150}
                pieHeight={150}
                onItemSelected={this._onPieItemSelected}
                colors={Theme.colors}
                width={width}
                height={height}
                data={[
                {
                  "number": Math.round(this.state.pIngreso),
                  "name": 'Ingresos'
                }, {
                  "number": Math.round(this.state.pGasto),
                  "name": 'Gastos'
                }
              ]}/>
          </View>
            </View>
          </Card>

          <View style={styles.align}>
            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ingresos()} style={styles.boton}>
                <Image source={imgIngresos} style={styles.img}/>
              </Button>
              <Text style={styles.text}>INGRESOS</Text>
            </Card>

            <Card style={styles.borde}>
              <Button style={styles.boton} transparent onPress={() => Actions.Gastos()}>
                <Image source={imgGastos} style={styles.img}/>
              </Button>
              <Text style={styles.text}>GASTOS</Text>
            </Card>

            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ahorros()} style={styles.boton}>
                <Image source={imgAhorros} style={styles.img}/>
              </Button>
              <Text style={styles.text}>AHORROS</Text>
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
    alignItems: 'center'
  },
  card2: {
    alignItems: 'center'
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
  },
  container: {
    backgroundColor: 'white',
    marginTop: 21
  },
  chart_title: {
    paddingTop: 5,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: 'white',
    color: 'grey',
    fontWeight: 'bold'
  },
  icon: {
    color: rgb(102,165,138)
  },
  icon2: {
    color: rgb(240,116,75)
  },
  icon3: {
    color: rgb(127,73,131)
  },
  text: {
    fontWeight: 'bold'
  },
  finanzas: {
    fontWeight: 'bold',
    color: rgb(102,165,138),
    fontSize: 16
  },
  finanzas2: {
    fontWeight: 'bold',
    color: rgb(240,116,75),
    fontSize: 16
  },
  finanzas3: {
    fontWeight: 'bold',
    color: rgb(127,73,131),
    fontSize: 16
  }
});

module.export = tabOne;
