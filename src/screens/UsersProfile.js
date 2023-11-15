import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { auth, db } from '../firebase/config';
import avatar from '../../assets/avatar.jpeg';
import Card from '../components/Card';
import { AntDesign } from '@expo/vector-icons';

class UsersProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: {},
            props: props,
            posteos: []
        }
    }









    
}