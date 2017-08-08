import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

class Fecha extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          showIcon={false}
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={this.state.date}
          maxDate="2030-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              alignItems: 'flex-start',
              marginLeft: 15,
              borderColor: 'white',
            },
            dateText:{
              color:'#424242'
            },

          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      );
    }
}

export default Fecha;
