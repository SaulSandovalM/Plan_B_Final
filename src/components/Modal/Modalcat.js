import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Catlistconte from './Catlistconte';
import styles from '../estilos/modcat.style';

export default class Gasto extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModal: 0,
      categoria: 'CATEGORIA',
      lista: [
        {
          id: 1,
          iname: 'restaurant',
          categoria: 'Alimentos'
        }, {
          id: 2,
          iname: 'book',
          categoria: 'Educacion'
        }, {
          id: 3,
          iname: 'ios-beer',
          categoria: 'Entretenimiento'
        }, {
          id: 4,
          iname: 'home',
          categoria: 'Hogar'
        }, {
          id: 5,
          iname: 'barcode',
          categoria: 'Factura'
        }, {
          id: 6,
          iname: 'heart',
          categoria: 'Salud'
        }, {
          id: 7,
          iname: 'car',
          categoria: 'Transporte'
        }
      ]
    }
  }

  icateFun = (categorita) => {
    const newCat = categorita;
    this.setState({categoria: newCat});
  }
  modFun = (moda) => {
    const newVis = moda
    this.setState({visibleModal: newVis});
  }

  setCatego = () => {
    this.props.conFun(this.state.icono),
    this.props.cateFun(this.state.categoria);
  }

  _renderModalContentcat = () => (
    <Catlistconte lista={this.state.lista} iFun={this.props.iFun} conFun={this.props.conFun}
    cateFun={this.props.cateFun} icateFun={this.icateFun} modFun={this.modFun}/>);

  render() {
    return (
      <View style={styles.containercat}>
        <Button transparent dark onPress={() => this.setState({visibleModal: 1})}>
          <Text style={{color: '#757575'}}>{this.state.categoria}</Text>
        </Button>

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContentcat()}
        </Modal>
      </View>
    );
  }
}
