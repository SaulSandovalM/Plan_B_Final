import React, {Component} from 'react';
import {Content} from 'native-base';
import Contenidolis from './Contenidolis';

class Listconte extends Component {
  render() {
    return (
      <Content>
        {this.props.lista.map(item => <Contenidolis key={item.id} item={item}  borrar={this.props.borrar}/>)}
      </Content>
    );
  }
}

export default Listconte;
