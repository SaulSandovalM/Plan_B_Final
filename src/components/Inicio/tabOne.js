import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Card, CardItem, Icon, Right, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import AreaSpline from '../js/charts/AreaSpline';
import Pie from '../js/charts/Pie';
import Theme from '../js/theme';
import data from '../resources/data';
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
    this.state = {
      activeIndex: 0,
      gastos:0,
      ingresos:0,
      pIngreso:parseInt(100),
      pGasto:parseInt(0),

    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex,
    });
  }

  //componentWillMount lo utilizamos para que busque en la rama especifica del usuario
  componentWillMount(){
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user){
      console.log('user', user)
      if(user){
        var uid= user.uid;
      }
      console.log(uid)
      const IngreRef = firebase.database().ref('usuarios/'+uid+'/ingreso');
      that.listenForIngre(IngreRef);
      const itemsRef = firebase.database().ref('usuarios/'+uid+'/gastos');
      that.listenForItems(itemsRef);
    });
  }
  //este listenForItems nos hara es sumar todos los gastos ya ingresados y los sacara en una  suma total para poder colocarlos

  listenForIngre (IngreRef) {
    IngreRef.once('value').then(snapshot => {
      if(snapshot.hasChildren()){
        var ingreso = 0;
        snapshot.forEach(function(ingr){
          ingreso += ingr.child('cantidad').val();
        });
      }
        console.log(ingreso);
        this.setState({ingresos:ingreso});
    });
  }
  
  listenForItems (itemsRef) {
    itemsRef.once('value').then(snapshot => {
      if(snapshot.hasChildren()){
        var gasto = 0;
        snapshot.forEach(function(item){
          gasto += item.child('cantidad').val();
        });
      }
      if(gasto==null){
        gasto=0
      }
        console.log(gasto);
        this.setState({gastos:gasto});
        setTimeout(()=>{
          pGasto=((this.state.gastos * 100)/this.state.ingresos),
          this.setState({pGasto:pGasto}),
          pIngreso=this.state.pIngreso-this.state.pGasto,
          this.setState({pIngreso:pIngreso})
        }, 80);

        pIngreso=this.state.pIngreso-this.state.pGasto;
        this.setState({pIngreso:pIngreso})
        console.log(pGasto)
        console.log(pIngreso)
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
              <Text>Tus Gastos</Text>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon} active name="md-arrow-round-down"/>
              <Text>Ingresos</Text>
              <Right>

                <Text style={styles.text1}>${this.state.ingresos}</Text>


              </Right>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon2} active name="md-arrow-round-up"/>
              <Text>Gastos</Text>
              <Right>
                <Text style={styles.text2}>${this.state.gastos}</Text>

              </Right>
            </CardItem>
            <CardItem>
              <Icon style={styles.icon3} active name="ios-cash"/>
              <Text>Ahorros</Text>
              <Right>
                <Text style={styles.icon3}>${this.state.pIngreso}</Text>
              </Right>
            </CardItem>
          </Card>

          <View style={styles.container}>
            <Text style={styles.chart_title}>Historial</Text>
            <Pie
              pieWidth={150}
              pieHeight={150}
              onItemSelected={this._onPieItemSelected}
              colors={Theme.colors}
              width={width}
              height={height}
              data={[
                {"number":  Math.round(this.state.pIngreso), "name": 'Ingresos'},
                {"number": Math.round(this.state.pGasto), "name": 'Gastos'},
              ]}/>

          </View>

          <View style={styles.align}>
            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ingresos()} style={styles.boton}>
                <Image source={imgIngresos} style={styles.img}/>
              </Button>
              <Text>Ingresos</Text>
            </Card>

            <Card style={styles.borde}>
              <Button style={styles.boton} transparent onPress={() => Actions.Gastos()}>
                <Image source={imgGastos} style={styles.img}/>
              </Button>
              <Text>Gastos</Text>
            </Card>

            <Card style={styles.borde}>
              <Button transparent onPress={() => Actions.Ahorros()} style={styles.boton}>
                <Image source={imgAhorros} style={styles.img}/>
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
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: 'white',
    color: 'grey',
    fontWeight: 'bold'
  },
  icon: {
    color: 'green'
  },
  icon2: {
    color: 'red'
  },
  icon3: {
    color: 'blue'
  }
});

module.export = tabOne;
