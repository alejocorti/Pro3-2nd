import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { React, Component } from 'react'
import { render } from 'react-dom';
import { auth } from '../config';
import Post from '../components/post';


export default class Feed extends Component {
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
    const posts = [
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
        {
            id:  Math.random(),
            title: Math.random()
        },
    ]
    return (
    <View style ={styles.container }>
        <FlatList
            data = {posts}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => (
                <Post {...item}></Post>
            ) }
        />
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
