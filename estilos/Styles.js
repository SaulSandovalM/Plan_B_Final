import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        height:300,
        width:300,
        backgroundColor:'white'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0'
    },

    displayText: {
        color: '#BDBDBD',
        fontSize: 38,
        fontWeight: 'bold',
        padding: 5
    },

    inputContainer: {
        flex: 8,
        backgroundColor: 'white',
        borderRadius: 4,
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },

    inputButtonHighlighted: {
        backgroundColor: '#B9F6CA'
    },

    inputButtonText: {
        fontSize: 20,
        color: '#616161'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'lightblue',
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
});

export default Style;
