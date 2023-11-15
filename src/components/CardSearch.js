import {React, Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// importo una imagen ubicada en assets 
import avatar from '../../assets/avatar.jpeg';

// la clase cardsearch es un componente de React de la clase base "Component"
// cardsearch es un componente personalizado que puedo usar en la app 
class CardSearch extends Component{
    constructor(props){
        super(props);
        // this.state refiere al objeto de estado de un componente en react 
        // el estado es un objeto que contiene datos que pueden cambiar a lo largo del ciclo de vida del componente 
        // se utiliza para iniciar el estado del componente 
        this.state = {
            // las siguiente es una propiedadad
            // props hace referencia a las props recibidas por el componente 
            props: props
        }
    };

    
    cortarTexto(texto){
        return texto.length > 80 ? texto.substring(0, 77) + '...' : texto
    }

    // el metodo render es parte del ciclo de vida de un componente en React 
    // se usa para renderizar y mostrar el contenido del componente en la interfaz de usuario 
    render(){
        // return es una declaracion utilizada en las funciones para devolver un valor o un conjunto de elementos 
        // return marca el inicio del retorno del JSX (javascript XML)
        // es una sintaxis similar a HTML utilizada en react para definir una estructura 
        return(

            <View style={style.cardContainer}>
                <TouchableOpacity onPress={() => this.props.searchProps.navigation.navigate('UsersProfile', { email: this.props.data.data.owner })}>
                    <Text style={style.creador}>{this.props.data.data.owner}</Text>
                    <View style={style.imgYTxt}>
                        <Image
                            style={style.image}
                            source={this.props.data.data.photo === '' ? avatar : this.props.data.data.photo}
                        />
                        <View style={style.text}>
                            <Text style={style.contenidoBold}>{this.props.data.data.userName}</Text>
                            <Text style={style.contenido}>{this.cortarTexto(this.props.data.data.bio)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }
}
const style = StyleSheet.create({
    cardContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'rgb(180,180,180)',
        borderStyle: 'solid',
        width: '100%'
    },
    creador: {
        fontWeight: 600,
        color: 'rgb(230,230,230)',
        fontSize: 18,
        marginBottom: 3
    },
    contenido: {
        fontSize: 16,
        color: 'rgb(230,230,230)',
        marginTop: 3
    },
    contenidoBold: {
        fontSize: 16,
        color: 'rgb(230,230,230)',
        marginTop: 3,
        fontWeight: '600'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 5
    },
    imgYTxt: {
        flexDirection: 'row',
        flex: 2
    },
    text: {
        width: '85%'
    }
})


export default CardSearch;