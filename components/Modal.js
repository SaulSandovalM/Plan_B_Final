import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Left, Icon, Right, Input, Item, Button} from 'native-base';
import Modal from 'react-native-modal';
import Style from '../estilos/Styles';
import InputButton from './Button';

const inputButtons = [
    [1, 2, 3,'/'],
    [4, 5, 6,'*'],
    [7, 8, 9,'-'],
    ['.',0 ,'=','+'],
    ['Cancelar','ok']
];

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      previousInputValue: 0,
      inputValue: 0,
      total: 0,
      selectedSymbol: null
    };
    this.state = this.initialState;
  }
  state = {
    visibleModal: null
  };

  _renderModalContent = () => (
    <View style={Style.modalContent}>
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Left>
            <Text style={Style.displayText}>$</Text>
          </Left>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
          <Right>
            <TouchableOpacity onPress={() => this.setState({inputValue: 0})}>
              <Icon style={{
                color: 'black'
              }} name='backspace'/>
            </TouchableOpacity>
          </Right>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={Style.container}>
        <Button transparent dark onPress={() => this.setState({visibleModal: 1})}>
          {this.state.total == 0
            ? <Text>Introduzca el valor</Text>
            : <Text>{"$" + this.state.total.toString()}</Text>}
        </Button>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }

  _renderInputButtons() {

    let views = inputButtons.map((row, idx) => {
      let inputRow = row.map((buttonVal, columnIdx) => {
        return <InputButton value={buttonVal} highlight={this.state.selectedSymbol === buttonVal}
          onPress={this._onInputButtonPressed.bind(this, buttonVal)} key={'butt-' + columnIdx}/>;
      });

      return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
    });
    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      default:
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;
    this.setState({inputValue: inputValue});
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({selectedSymbol: str, previousInputValue: this.state.inputValue, inputValue: 0});
        break;

      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;

      case 'Cancelar':
        this.setState({visibleModal: null});
        break;

      case 'ok':
        symbol = this.state.selectedSymbol,
        inputValue = this.state.inputValue,
        previousInputValue = this.state.previousInputValue;

        this.setState({
          previousInputValue: 0,
          inputValue: 0,
          total: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null,
          visibleModal: null
        });
        break;
    }
  }
}
