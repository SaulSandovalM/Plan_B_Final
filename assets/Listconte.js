import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import Contenidolis from './Contenidolis';

class Listconte extends Component {
  render() {
    return (
      <Content>
        {this.props.lista.map(item => <Contenidolis key={item.id} item={item}/>)}
      </Content>
    );
  }
}

export default Listconte;
