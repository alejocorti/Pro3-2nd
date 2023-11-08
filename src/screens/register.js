import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { React, Component } from 'react'
import { render } from 'react-dom';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            foto: '',
            nombre: '',
            bio: ''

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Register here</Text>
                <TextInput style={styles.field}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />

                <TextInput style={styles.field}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password} />

                <TextInput style={styles.field}
                    keyboardType='default'
                    placeholder='Nombre de usuario'
                    onChangeText={text => this.setState({ nombre: text })}
                    value={this.state.nombre} />

                <TextInput style={styles.field}
                    keyboardType='default'
                    placeholder='Datos personales'
                    onChangeText={text => this.setState({ bio: text })}
                    value={this.state.bio} />

                <TextInput style={styles.field}
                    keyboardType='default'
                    placeholder='Foto de perfil'
                    onChangeText={text => this.setState({ foto: text })}
                    value={this.state.foto} />

                <TouchableOpacity onPress={() => this.onSubmit()} style={styles.login}>
                    <Text> Login </Text>
                </TouchableOpacity>
            </View>
        )
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
        borderColor: 'orange',
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



    }

});
