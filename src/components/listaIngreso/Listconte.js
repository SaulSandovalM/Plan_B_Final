import React, {Component} from 'react';
import {Content,Separator,Text} from 'native-base';
import Contenidolis from './Contenidolis';

class Listconte extends Component {
  constructor() {
    super();
  console.ignoredYellowBox = true;
  }

  render() {
    return (
      <Content>
      <Separator bordered>
           <Text>Ingresos</Text>
         </Separator>
        {this.props.ingreso.map(item =>
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
