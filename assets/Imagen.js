import React from 'react';
import {AppRegistry, StyleSheet, View, Image} from 'react-native';
import {Thumbnail, Container, Content, Icon} from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  state = {
    avatarSource: null
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {skipBackup: true}
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {
          uri: response.uri
        };
        this.setState({avatarSource: source});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.avatarSource === null
          ? <Thumbnail style={styles.tub} square large source={require('../imgs/user.png')}/>
          : <Thumbnail style={styles.tub} square large source={this.state.avatarSource}/>
        }
        <View style={styles.view}>
          <Icon onPress={this.selectPhotoTapped.bind(this)} name='camera'/>
        </View>
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
