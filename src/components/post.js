import { StyleSheet, Text, View, TextInput,TouchableOpacity, FlatList, Image } from 'react-native';
import { React, Component } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.user}>{'Off shoes'}</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://img.mytheresa.com/1094/1236/90/jpeg/catalog/product/1c/P00584661.jpg'}} 
                    resizeMode='contain'
                />
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Ionicons name="md-heart-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chatbubble-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text>
                        Zapatillas OffWhite talle 38 
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    user: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        marginTop: 15,
        height: 300,
        flex: 1
    },
    icons: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 10
    },
    title: {
        marginTop: 15
    }

});