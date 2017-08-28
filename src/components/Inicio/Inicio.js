import React, {Component} from 'react';
import {Container, Tab, Tabs, StyleProvider} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Cabecera from '../Cabecera/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class HeaderExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Cabecera hasTabs/>
        <Tabs>
          <Tab heading="YO" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} >
            <Tab1/>
          </Tab>
          <Tab heading="NOTICIAS" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}}>
            <Tab2/>
          </Tab>
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}
