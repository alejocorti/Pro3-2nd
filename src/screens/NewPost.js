import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {db, auth} from '../firebase/config'

// importo el componente formpost generado por nosotros 
import FormPost from '../components/FormPost'

class NewPost extends Component{

    constructor(props){
        super(props);
        this.state = {
        descripcion: '',
        foto: '',
        likes:[],
        comments:[]
      }
    }
}
