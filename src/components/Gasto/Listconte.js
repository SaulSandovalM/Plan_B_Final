import React, {Component} from 'react';
import {Content} from 'native-base';
import Contenidolis from './Contenidolis';

class Listconte extends Component {
  constructor() {
    super();
  console.ignoredYellowBox = true;

  }
  render() {
    return (
      <Content>
        {this.props.lista.map(item =>
           <Contenidolis key={item.id}
                          item={item}
                          borrar={this.props.borrar}
                          editFun={this.props.editFun}
                          editKey={this.props.editKey}/>
                )}
      </Content>
    );
  }
}

export default Listconte;
