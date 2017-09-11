import React from 'react';
import {AppRegistry, StyleSheet, View, Image} from 'react-native';
import {Thumbnail, Container, Content, Icon} from 'native-base';
import firebase, {firebaseAuth} from '../Firebase/Firebase';

export default class App extends React.Component {
  state = {
    avatarSource: null
  };

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        if (user.photoURL != null) {
          image = user.photoURL;
        } else {
          image = 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png';
        }
      }
    });
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.avatarSource === null
          ? <Thumbnail style={styles.tub} square large source={{uri: image}}/>
          : <Thumbnail style={styles.tub} square large source={this.state.avatarSource}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tub: {
    zIndex: 1,
    position: 'absolute',
    top: -60,
    borderColor: 'white',
    borderWidth: 2.5
  },
  view: {
    zIndex: 2,
    left: 35,
    backgroundColor: 'white',
    height: 35,
    borderRadius: 15,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
