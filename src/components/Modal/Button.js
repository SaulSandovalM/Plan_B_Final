import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={[
        styles.inputButton, this.props.highlight
          ? styles.inputButtonHighlighted
          : null
      ]} underlayColor="#F5F5F5" onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputButtonHighlighted: {
    backgroundColor: '#B9F6CA'
  },
  inputButtonText: {
    fontSize: 20,
    color: '#616161'
  }
})
