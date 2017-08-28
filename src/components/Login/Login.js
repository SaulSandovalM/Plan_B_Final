import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/log.jpg';

const {FacebookAuthProvider} = firebase.auth

class Login extends Component {
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: ''
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const {accessToken} = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        Actions.Inicio();
      }, (error) => {
        console.log("Sign in error", error)
      })
    }).catch((error) => {
      console.log("Sign in error", error)
    });
  }

  onButtonPress() {
    const {email, contraseña} = this.state;
    this.setState({error: ''});
    firebaseAuth.signInWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess).catch(this.onLoginFailed);
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida'});
    alert('Registrate!')
  }
  onLoginSuccess() {
    this.setState({email: '', contraseña: '', error: ''});
  }

  render() {
    return (
      <Image source={img} style={styles.img}>

        <Text style={styles.texto}>LOGO</Text>

        <View style={styles.view}>
          <LoginButton readPermissions={['public_profile', 'email']} onLoginFinished={this.handleLoginFinished}
            onLogoutFinished={() => alert("Adios.")}/>
        </View>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='#ccc'
            returnKeyType='next' value={this.state.text} onChangeText={email => this.setState({email})}/>
        </Item>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Contraseña' placeholderTextColor='#ccc' secureTextEntry={true}
            value={this.state.contraseña} onChangeText={contraseña => this.setState({contraseña})}/>
        </Item>

        <Button rounded block style={styles.buttonIngreso} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.boton}>INGRESAR</Text>
        </Button>

        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text}>¿Aún no tienes cuenta?,</Text>
            <Text style={styles.font} onPress={() => Actions.Registro()}>REGISTRATE</Text>
          </View>
        </View>
      </Image>
    );
  }
}

handleLoginFinished = (error, result) => {
  if (error) {
    console.error(error)
  } else if (result.isCancelled) {
    console.log("login is cancelled.");
  } else {
    this.authenticateUser()
    alert('FuncionHandle')
  }
}

const styles = StyleSheet.create({
  img: {
    justifyContent: 'space-around',
    flex: 2,
    height: null,
    width: null,
    opacity: 15
  },
  texto: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  view: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  view2: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  view3: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  font: {
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    color: 'white'
  }
});

export default Login;
