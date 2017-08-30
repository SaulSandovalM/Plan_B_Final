import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Ingresos from '../Ingreso/Ingresos';
import Gastos from '../Gasto/Gastos';
import Terminos from '../Terminos/Terminos';
import Ahorros from '../Ahorro/Ahorros';
import Perfil from '../Perfil/Perfil';
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Inicio from '../Inicio/Inicio';
import NuevoAhorro from '../Ahorro/NuevoAhorro';
import Tips from '../Tips/Tips';
import Log from '../Login/Log';
import Bienvenido from '../Bienvenida/Bienvenido';
import IngresosIntro from '../FinanzasEmpezar/IngresosIntro';
import GastosIntro from '../FinanzasEmpezar/GastosIntro';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Bienvenido" header={null} component={Bienvenido} />
        <Scene key="Ter" header={null} component={Terminos}/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Log" header={null} component={Log} initial/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="IngresosIntro" header={null} component={IngresosIntro}/>
        <Scene key="GastosIntro" header={null} component={GastosIntro}/>
        <Scene key="Inicio" header={null} component={Inicio}/>
        <Scene key="Ingresos" header={null} component={Ingresos}/>
        <Scene key="Gastos" header={null} component={Gastos}/>
        <Scene key="Ahorros" header={null} component={Ahorros}/>
        <Scene key="NuevoAhorro" header={null} component={NuevoAhorro}/>
        <Scene key="Tips" header={null} component={Tips}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
      </Scene>
    </Router>
  );
}
export default Routes;
