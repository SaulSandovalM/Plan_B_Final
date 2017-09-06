import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase, {firebaseAuth} from '../Firebase/Firebase';
import FBSDK, {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {Button, Icon, Item, Input, Toast, Spinner, Label} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/log.jpg';
import img2 from '../../assets/imgs/plan2.png';

const {FacebookAuthProvider} = firebase.auth

class Login extends Component {
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: '',
    loading: false,
    loadingF: false
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
    this.facebook = this.facebook.bind(this);
  }

  facebook(){
    this.setState({loadingF: true});
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
          (result) => {
          if (result.isCancelled) {
            return Promise.resolve('cancelled');
          }
          return AccessToken.getCurrentAccessToken();
        }).then(data => {
          // create a new firebase credential with the token
          const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

          // login with credential
          return firebase.auth().signInWithCredential(credential);
        }).then((currentUser) => {
          if (currentUser === 'cancelled') {
            console.log('Login cancelled');
          } else {
            // now signed in
            Actions.Log();
            Toast.show({
                      text: 'Bienvenido',
                      position: 'bottom',
                      duration: 3000,
                      type: 'success'
                    })

          }
        }).catch((error) => {
          console.log(`Login fail with error: ${error}`);
        })
  }

  onButtonPress() {
    const {email, contraseña} = this.state;
    this.setState({error: '', loading: true});
    firebaseAuth.signInWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess).catch(this.onLoginFailed);
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({
              text: 'Usuario/contraseña inválidos',
              position: 'bottom',
              buttonText: 'OK',
              type: 'danger'
            })

  }
  onLoginSuccess() {
    this.setState({email: '', contraseña: '', error: '', loading: false});
    Actions.Log();
    Toast.show({
              text: 'Bienvenido',
              position: 'bottom',
              duration: 5000,
              type: 'success'
            })
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
      <Button rounded block style={styles.buttonIngreso} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.boton}>INGRESAR</Text>
      </Button>
    );
  }

  spinnerInicioF(){
    if(this.state.loadingF){
      return (
        <Button rounded block style={styles.buttonSpinnerF}>
          <Spinner color='white' />
        </Button>
      );
    }
    return(
      <Button rounded block iconLeft light style={styles.buttonIngresoF} onPress={this.facebook.bind(this)}>
        <Icon name='logo-facebook' style={{color:'white'}}/>
        <Text style={styles.boton}>Iniciar con Facebook</Text>
      </Button>
    );
  }


  render() {
    return (
      <Image source={img} style={styles.img}>
        <Image source={img2} style={styles.imagen}/>

          {this.spinnerInicioF()}

          <Item rounded style={styles.inputRounded}>
            <Input style={styles.input} placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='#ccc'
              returnKeyType='next' value={this.state.text} onChangeText={email => this.setState({email})}/>
          </Item>

          <Item rounded style={styles.inputRounded}>
            <Input style={styles.input} placeholder='Contraseña' placeholderTextColor='#ccc' secureTextEntry={true}
              value={this.state.contraseña} onChangeText={contraseña => this.setState({contraseña})}/>
          </Item>

          {this.spinnerInicio()}

          <View style={styles.view2}>
          <View style={styles.view3}>
            <TouchableOpacity onPress={() => Actions.Registro()}><Text style={styles.text} >¿Aún no tienes cuenta?, REGÍSTRATE</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.Recover()}><Text style={styles.text}>¿Olvidaste tu contraseña?</Text></TouchableOpacity>
          </View>
        </View>
        </Image>
    );
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
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  buttonIngresoF: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#3b5998'
  },
  buttonSpinnerF: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#3b5998'
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 10
  },
  font: {
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  imagen: {
    width: 180,
    height: 62,
    alignSelf: 'center'
  },
  icon: {
    color:'white'
  }
});

export default Login;
