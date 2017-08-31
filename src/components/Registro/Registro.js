import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import {Button, Icon, Item, Input, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/reg.jpg';
import imagen from '../../assets/imgs/plan2.png';

class Registro extends Component {
  state = {
    correo: '',
    password: '',
    verifyPassword: '',
    error: '',
    loading: false,
  };
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  atras() {
    Actions.pop()
  }

  onButtonPress() {
    const {correo, password, verifyPassword} = this.state;
    this.setState({error: '', loading: true});

    if (password == verifyPassword && password != null && verifyPassword != null) {
      firebaseAuth.createUserWithEmailAndPassword(correo, password).then(this.onLoginSuccess).catch(this.onLoginFailed);
    } else {
      alert("Verifica campos");
    }
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading:false});
    alert('Autenticación Fallida')
  }
  onLoginSuccess() {
    this.setState({correo: '', password: '', error: '', verifyPassword: '', loading:false});
    Actions.Log();
  }

  spinnerInicio(){
    if(this.state.loading){
      return (
        <Button rounded block style={styles.buttonSpinner}>
          <Spinner color='white' />
        </Button>
      );
    }
    return(
      <Button rounded block style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.text}>CREAR CUENTA</Text>
      </Button>
    );
  }

  render() {
    return (
      <Image source={img} style={styles.img}>

        <Image source={imagen} style={styles.imagen}/>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='#ccc'
            returnKeyType='next' value={this.state.correo} onChangeText={correo => this.setState({correo})}/>
        </Item>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Contraseña' placeholderTextColor='#ccc' secureTextEntry={true}
            value={this.state.password} onChangeText={password => this.setState({password})}/>
        </Item>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Verificar Contraseña' secureTextEntry={true} placeholderTextColor='#ccc'
            value={this.state.verifyPassword} onChangeText={(verifyPassword) => this.setState({verifyPassword})}/>
        </Item>

        {this.spinnerInicio()}

        <View style={styles.footerStyle}>
          <TouchableOpacity onPress={this.atras.bind(this)}><Text style={styles.ingresar}>¿Ya tienes cuenta?, INGRESA</Text></TouchableOpacity>
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
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
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
    color: 'white'
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
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  ingresar: {
    color: 'white'
  },
  imagen: {
    width: 180,
    height: 62,
    alignSelf: 'center'
  }
})

export default Registro;
