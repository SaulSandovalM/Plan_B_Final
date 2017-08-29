/*import firebase, {firebaseAuth} from '../Firebase/Firebase';

type State = {
  activeIndex: number,
  spendingsPerYear: any
}*/

export default {
  /*state : State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
      gastos: 0
    };
  }

  //componentWillMount lo utilizamos para que busque en la rama especifica del usuario
  componentWillMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
      }
      console.log(uid)
      const itemsRef = firebase.database().ref('usuarios/' + uid + '/gastos');
      that.listenForItems(itemsRef);
    });
  }
  //este listenForItems nos hara es sumar todos los gastos ya ingresados y los sacara en una  suma total para poder colocarlos
  listenForItems(itemsRef) {
    itemsRef.once('value').then(snapshot => {
      if (snapshot.hasChildren()) {
        var gasto = 0;
        snapshot.forEach(function(item) {
          gasto += item.child('cantidad').val();
        });
      }
      this.setState({gastos: gasto});
    });
  }*/

  spendingsLastMonth: [
    {"number":  80, "name": 'Ingresos'},
    {"number": 20, "name": 'Gastos'},
  ],
};
