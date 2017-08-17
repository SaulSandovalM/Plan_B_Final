import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class Contenidolis extends Component {
  render() {
    return (

          <List>
            <ListItem icon>
              <Left>
                <Icon name={this.props.item.iname} />
              </Left>
              <Body>
                <Text>{this.props.item.categoria}</Text>
                <Text note>{this.props.item.descri}</Text>
              </Body>
              <Right>
                <Text>{this.props.item.cantidad}</Text>
              </Right>
            </ListItem>
          </List>
    );
  }
}
