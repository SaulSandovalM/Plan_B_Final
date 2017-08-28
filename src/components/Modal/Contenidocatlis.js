import React, {Component} from 'react';
import {List, ListItem, Text, Icon, Left, Body} from 'native-base';

export default class ListIconExample extends Component {
  state = {
    icono: '',
    categoria: ''
  }

  setIcon = () => {
    this.setState({icono: this.props.item.iname, categoria: this.props.item.categoria}),
    setTimeout(() => {
      this.props.icateFun(this.state.categoria),
      this.props.conFun(this.state.icono),
      this.props.cateFun(this.state.categoria),
      this.props.iFun(this.state.icono),
      this.props.modFun(0);
    }, 100);
  }

  render() {
    return (
      <List>
        <ListItem icon onPress={this.setIcon}>
          <Left>
            <Icon name={this.props.item.iname}/>
          </Left>
          <Body>
            <Text>{this.props.item.categoria}</Text>
          </Body>
        </ListItem>
      </List>
    );
  }
}
