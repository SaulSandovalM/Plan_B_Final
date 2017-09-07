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
import Nodata from './Nodata';

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
      pIngreso:0,
      pGasto:0,
      totI:0,
      totG:0

    };

    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex
    });
  }


  //componentWillMount lo utilizamos para que busque en la rama especifica del usuario
  //se eliminaron variables del State y hay cambio en la card de los datos es un
  //this.state.totI y totG
  componentWillMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)

      if (typeof user !== "undefined" &&  user !== null  ) {
        var uid = user.uid;
        console.log(uid)
        const IngreRef = firebase.database().ref('usuarios/' + uid + '/ingreso');
        that.listenForIngre(IngreRef);
        const itemsRef = firebase.database().ref('usuarios/' + uid + '/gastos');
        that.listenForItems(itemsRef);
      }

    });
  }
  //Esto ya hace una suma de todo

  listenForIngre(IngreRef) {
    IngreRef.on('child_added',(s)=> {
      const ingr = s.val();
      let totI = this.state.totI;
      totI += ingr.cantidad;
      this.setState({totI}, () => {
        console.log(this.state.totI)
      });
      this.setState({pIngreso:100});

});
}

listenForItems(itemsRef) {
  itemsRef.on('child_added', (item)=> {
    const gast = item.val();
    let totG = this.state.totG;
    totG += gast.cantgast;
    this.setState({totG},()=>{
        console.log("Hola Bebe")
        if (this.state.pIngreso !== 0) {
          let pGasto = this.state.pGasto;
          pGasto = ((this.state.totG * 100) / this.state.totI);
          console.log(pGasto);
          this.setState({pGasto}, ()=>{
            let pIngreso = this.state.pIngreso;
            console.log(this.state.pIngreso);
            console.log(this.state.pGasto);
            pIngreso = 100- this.state.pGasto;
            this.setState({pIngreso});
            console.log(pIngreso);
          });
        }
        });


    });

}

componentDidMount(){

}
//hasta aqui

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
                  <Text style={styles.finanzas}>$ {this.state.totI}.00</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Icon style={styles.icon2} active name="ios-list-box"/>
                <Text style={styles.icon2}>Gastos</Text>
                <Right>
                  <Text style={styles.finanzas2}>$ {this.state.totG}.00</Text>

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
                <View style={styles.view}>
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

            <Nodata/>

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
      color: rgb(102, 165, 138)
    },
    icon2: {
      color: rgb(240, 116, 75)
    },
    icon3: {
      color: rgb(127, 73, 131)
    },
    text: {
      fontWeight: 'bold'
    },
    finanzas: {
      fontWeight: 'bold',
      color: rgb(102, 165, 138),
      fontSize: 16
    },
    finanzas2: {
      fontWeight: 'bold',
      color: rgb(240, 116, 75),
      fontSize: 16
    },
    finanzas3: {
      fontWeight: 'bold',
      color: rgb(127, 73, 131),
      fontSize: 16
    },
    view: {
      alignItems: 'center'
    }
  });

  module.export = tabOne;
