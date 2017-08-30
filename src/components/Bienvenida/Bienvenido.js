import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Video from 'react-native-video';
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import video from '../../assets/video/video.mp4';
import img from '../../assets/imgs/planb.png';

class Bienvenido extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={video}
          rate={1.0}
          muted={true}
          resizeMode={"cover"}
          repeat
          style={styles.video}/>

        <View style={styles.content}>
          <Image source={img} style={styles.img}/>
          <Text style={styles.text}>"La pasión construye negocios. El miedo no."</Text>
          <Button rounded block style={styles.buttonIngreso} onPress={() => Actions.Ter()}>
            <Text style={styles.boton}>EMPECEMOS</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  img: {
    width: 350,
    height: 300,
    top: -180
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    top: 5,
    backgroundColor: '#4DA49B'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
});

export default Bienvenido;
