import React from 'react';
import {AppRegistry, StyleSheet, View, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Thumbnail style={styles.tub} square large source={{uri: image}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  tub: {
    zIndex: 1,
    position: 'absolute',
    top: -60,
    borderColor: 'white',
    borderWidth: 2.5
  },
});
