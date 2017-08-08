import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => Actions.Ingresos()}>
            <Icon name="cash"/>
            <Text>Ingresos</Text>
          </Button>
          <Button vertical onPress={() => Actions.Gastos()}>
            <Icon name="alert"/>
            <Text>Gastos</Text>
          </Button>
          <Button vertical onPress={() => Actions.Ahorros()}>
            <Icon active name="beaker"/>
            <Text>Ahorros</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

module.export = Footers;
