import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Text, Icon, Button} from 'native-base';
import Contenidocatlis from './Contenidocatlis';

class ListComponent extends Component {
  render() {
    return (
      <View style={styles.rootContainercat}>
        <ListItem itemDivider>
          <Text>Categoria</Text>
        </ListItem>

        {this.props.lista.map(item =>
          <Contenidocatlis icateFun={this.props.icateFun} conFun={this.props.conFun}
          cateFun={this.props.cateFun} modFun={this.props.modFun} iFun={this.props.iFun} key={item.id} item={item}/>)}

        <ListItem>
          <Button transparent dark onPress={() => this.props.modFun(0)}>
            <Text>Cancelar</Text>
          </Button>
        </ListItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainercat: {
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center'
  }
});

export default ListComponent;
