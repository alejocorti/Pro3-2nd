import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default class FormPost extends Component {

    render(){

      return(

      <View>
        <TextInput
        style
        keyboardType='default'
        value= ''
        onChangeText={(text)=> this.props.actualizarDescripcion(text)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10
    }
})