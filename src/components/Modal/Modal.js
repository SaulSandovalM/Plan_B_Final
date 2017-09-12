import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Left, Icon, Right, Button} from 'native-base';
import Modal from 'react-native-modal';
import InputButton from './Button';

const inputButtons = [
    [1, 2, 3,'/'],
    [4, 5, 6,'*'],
    [7, 8, 9,'-'],
    ['=',0,'+'],
    ['Cancelar','ok']
];

export default class Example extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
    this.initialState = {
      previousInputValue: 0,
      inputValue: 0,
      total:0,
      selectedSymbol: null
    };
    this.state = this.initialState;
  }

  state = {
    visibleModal: null
  };

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <Left>
            <Text style={styles.displayText}>$</Text>
          </Left>
          <Text style={styles.displayText} onChange>{this.state.inputValue}</Text>
          <Right>
            <TouchableOpacity onPress={() => this.setState({inputValue: 0})}>
              <Icon style={styles.icon} name='backspace'/>
            </TouchableOpacity>
          </Right>
        </View>
        <View style={styles.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Button transparent dark onPress={() => this.setState({visibleModal: 1})}>
          {this.state.total == 0
            ? <Text>Introduzca el valor</Text>
            : <Text>{"$" + this.state.total}</Text>}
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
      return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
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

        setTimeout(()=>{
          this.props.valorfun(this.state.total)
        }, 150);
        break;
    }
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 300,
    width: 300,
    backgroundColor: 'white'
  },
  displayContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  displayText: {
    color: '#BDBDBD',
    fontSize: 38,
    fontWeight: 'bold',
    padding: 5
  },
  inputContainer: {
    flex: 8,
    backgroundColor: 'white',
    borderRadius: 4
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  icon: {
    color: 'black'
  }
});
