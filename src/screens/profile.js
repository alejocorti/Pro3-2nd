import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { React, Component } from 'react'
import { render } from 'react-dom';
import { auth } from '../config';


export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            info: '',
            loading: false

        }
    }

render() {
    return (<View><Text> Profile </Text></View>)
    
    
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        color: 'red'
    },
    field: {
        width: 200,
        height: 30,
        borderColor: 'green',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 10,
    },
    login: {
        width: 200,
        height: 30,
        borderColor: 'pink',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    registrate: {
        width: 200,
        height: 30,
        borderColor: 'pink',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },

});
