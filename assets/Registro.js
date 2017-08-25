import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import firebase, {firebaseAuth} from './Firebase';
import {Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Registro extends Component {
  state = {
    correo: '',
    password: '',
    verifyPassword: '',
    error: '',
  };
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  onButtonPress() {
    const {correo, password, verifyPassword } = this.state;
    this.setState({error: ''});

    if (password == verifyPassword && password !=null && verifyPassword != null) {
      firebaseAuth.createUserWithEmailAndPassword(correo, password).then(this.onLoginSuccess)
      .catch(this.onLoginFailed);
      }
     else {
      alert("Verifica campos");
    }
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida'});
    alert('Autenticación Fallida')
}
  onLoginSuccess() {
    this.setState({correo: '', password: '', error: '', verifyPassword: ''});
    Actions.Log();
  }

  render() {
    return (
      <Image source={require('../imgs/reg.jpg')} style={styles.img}>

      <Text style={styles.texto}>LOGO</Text>

      <Item rounded style={styles.inputRounded}>
        <Input style={styles.input}
          placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='#ccc'
          returnKeyType='next' value={this.state.correo} onChangeText={correo => this.setState({correo})}/>
      </Item>

      <Item rounded style={styles.inputRounded}>
        <Input style={styles.input}
          placeholder='Contraseña' placeholderTextColor='#ccc' secureTextEntry={true} value={this.state.password}
          onChangeText={password => this.setState({password})}/>
      </Item>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input}
          placeholder='Verificar Contraseña' secureTextEntry={true} placeholderTextColor='#ccc' value={this.state.verifyPassword}
            onChangeText={(verifyPassword) => this.setState({verifyPassword})} />
        </Item>

        <Button rounded block style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
          <Text style={{color:'white',fontWeight: 'bold'}}>CREAR CUENTA</Text>
        </Button>

        <View style={styles.footerStyle}>
          <Text style={{color:'white'}}>¿Ya tienes cuenta?, </Text>
          <Text style={styles.font} onPress={()=>Actions.Login()}>INGRESA</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  img: {
    justifyContent: 'space-around',
    flex: 2,
    height: null,
    width: null,
    opacity: 15
  },
  iconStyle: {
    fontSize: 100,
    color: '#f08080',
    alignSelf: 'center'
  },
  regisTex: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080'
  },
  buttonStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    backgroundColor: '#4DA49B'
  },
  texto: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  footerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  font: {
    fontWeight: 'bold',
    color:'white'
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1.5,
    backgroundColor: 'white'
  },
  input: {
    color: 'black'
  },
})

export default Registro;
