import React, {Component} from 'react';
import {Animated, Alert} from 'react-native';
import {List, ListItem, Text, Icon, Left, Body, Right} from 'native-base';
const ACTION_TIMER = 400;

export default class Contenidolis extends Component {

  constructor(props) {
    super(props);
    console.ignoredYellowBox = true;
    this.state = {
      pressAction: new Animated.Value(0),
      item: null,
      visibleModal:2
    };
  }

  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener((v) => this._value = v.value);
  }

  pressIn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1
    }).start(this.animationActionComplete);
  }
  pressOn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1
    }).start(this.animationActionedit);
  }

  borrar = () => {
    this.props.borrar(this.props.item);
  }
  editar=()=>{
    this.props.editFun(this.state.visibleModal);
    this.props.editKey(this.props.item);
    console.log(this.props.item)


  }

  animationActionedit = () => {
    const message = '¿Que deseas hacer?';
    if (this._value === 1) {
      Alert.alert('Editar', message, [
        {
          text: 'Aceptar',
          onPress:this.editar
        }, {
          text: 'Cancelar',
          onPress: null
        }
      ]);
    }
  }

  animationActionComplete = () => {
    const message = '¿Que deseas hacer?';
    if (this._value === 1) {
      Alert.alert('ELIMINAR', message, [
        {
          text: 'Borrar',
          onPress: this.borrar
        }, {
          text: 'Cancelar',
          onPress: null
        }
      ]);
    }
  }

  render() {
    return (

      <List>
        <ListItem icon onLongPress={this.pressIn} onPress={this.pressOn}>
          <Left>
            <Icon name="md-checkmark"/>
          </Left>
          <Body>
            <Text>{this.props.item.descri}</Text>
          </Body>
          <Right style={{flexDirection:'column'}}>
              <Text note>{this.props.item.fecha}</Text>
              <Text>${this.props.item.cantidad}</Text>
          </Right>
        </ListItem>
      </List>


    );
  }
}
