import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';
import Style from '../estilos/Styles';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={[
        Style.inputButton, this.props.highlight
          ? Style.inputButtonHighlighted
          : null
      ]} underlayColor="#F5F5F5" onPress={this.props.onPress}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }

}
