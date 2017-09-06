import React, {Component} from 'react';
import {Animated, Alert} from 'react-native';
import {List, ListItem, Text, Icon, Left, Body, Right} from 'native-base';
const ACTION_TIMER = 400;

export default class Contenidolis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressAction: new Animated.Value(0),
      item: null
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

  borrar = () => {
    this.props.borrar(this.props.item);
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
        <ListItem icon onLongPress={this.pressIn}>
          <Left>
            <Icon name={this.props.item.iname}/>
          </Left>
          <Body>
            <Text>{this.props.item.categoria}</Text>
            <Text note>{this.props.item.descri}</Text>
          </Body>
          <Right>
            <Text>{this.props.item.cantidad}</Text>
          </Right>
        </ListItem>
      </List>

    );
  }
}
