import {React, Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { db, auth } from '../firebase/config';

//importo el moduo firebase de biblioteca firebase para acceder a diferentes servicios 
import firebase from "firebase";
import { FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

//importo el componente comment 
import Comment from "../screens/Comment";

// la clase card es un componente de React de la clase base "Component"
// card es un componente personalizado que puedo usar en la app 
class Card extends Component{
    constructor(props){

        super(props);
        this.state = {
            props: props,
            cantidadDeLikes: this.props.data.data.likes.length,
            miLike: false,
            owner: false
        }
    };



    componentDidMount() {
       
        if (this.props.data.data.likes.includes(auth.currentUser.email)) {
            this.setState({
                miLike: true
            })
        } 

        if (auth.currentUser.email === this.props.data.data.owner){
            this.setState({
                owner: true
            })
        }
    }
    botonLike(){
        // en la primera condicion se verifica si el estado miLike es true, lo que indica si el usuario dio like 
        if(this.state.miLike === true){
            // en ese caso se actualiza el estado estableciendo miLike, en false para indicar que el usuario quito el like
            // tambien reduce 1 la cantidad de likes
            this.setState({
                miLike: false,
                cantidadDeLikes: this.state.cantidadDeLikes -1,
            })
            // ademas llama a la funcion disLike, para realizar acciones necesarias con el dislike 
            // envia una solicitud al servidor para registrar que el usuario dio un dislike 
            this.disLike()
        } else{
            this.setState({
                miLike: true,
                cantidadDeLikes: this.state.cantidadDeLikes +1,
            })
            // envia solicitud al servidor indicando que se dio un like 
            this.likes()
        }
    }
    likes() {
        // accede a la coleccion posts utilizando db.collection('post')
        db.collection('posts')
        // obtengo un documento especifico .doc(this.props.data.id), lo de adentro es el identificador al q le asigno el like
        .doc(this.props.data.id)
        // utilizo el metodo update para actualizar el documento 
        // firebase.firestore.FieldValue.arrayUnion uso para agregar el coreo al array existente dee likes 
        // el motodo update devuelve una promesa 
        .update({
            // actualizo el campo likes de un documento de firestore 
            // el mail que agrego es el auth.currectUser.email
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        // utiliza then para deolver la promesa 
        // realiza una accion despues de que se completo la actualizacion, muestra like en la consola 
        .then(()=> 
        console.log('like')
           )
        
        .catch(error=>console.log(error))
    }

    // la funcion dislike realiza una operacion en la base de datos para quitar el correo electronico del usuario 
    // se quita al array de likes en un documento especifico de posts 
    disLike() {
        // accede a la coleccion posts utilizando db.collection('post')
        db.collection('posts')
        // obtengo un documento especifico .doc(this.props.data.id), lo de adentro es el identificador al q le quito el like
        .doc(this.props.data.id)
        // utilizo el metodo update para actualizar el documento 
        // firebase.firestore.FieldValue.arrayUnion uso para quitar el coreo al array existente de likes 
        // el motodo update devuelve una promesa 
        .update({
            // actualizo el campo likes de un documento de firestore 
            // el mail que quito es el auth.currectUser.email
            // cambie a arrayRemove 
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(()=> 
            // utiliza then para deolver la promesa 
            // realiza una accion despues de que se completo la actualizacion, muestra dislike en la consola 
            console.log('disLike')
           )
        // catch es un metodo utilizado en javascript para capturar y manejar errores de bloques de codigo 
        // capturamos cualquier error que pueda ocurrir durante la solicitud 
        // si se produce un error se registra en la consola, y lo podemos manejar de manera adecuada
        .catch(error=>console.log(error))
    }

    // esta funcion se encarga de eliminar un post especifico de la coleccion posts en firebase firestone 
    deletePost(){
        // esto nos hace refenencia a la coleccion posts en firestone 
        db.collection("posts")
        // con esto accedo a un documento especifico dentro de la coleccion 
        .doc(this.props.data.id)
        // llamo al metodo delete en el documento para eliminarlo de la coleccion 
        .delete()
     
        .then(() => {
            console.log('Post eliminado');
        })

        .catch((e) => { console.log(e);
        });
    }

    render(){
       
        return(
            <View style={style.cardContainer}>
                    <View style={style.flex}>
                        <TouchableOpacity onPress={() => this.props.homeProps.navigation.navigate('UsersProfile', { email: this.props.data.data.owner })}>
                            <Text style={style.creador}>{this.props.data.data.owner}</Text>
                        </TouchableOpacity>   

                        {this.state.owner === true ? 
                            <TouchableOpacity onPress={() => this.deletePost()}>
                                <FontAwesome name="trash-o" size={24} color="red" />
                            </TouchableOpacity>
                        : null }
                    </View>
                    <Image
                        style={style.image}
                        source={{ uri: this.props.data.data.photo }}
                    />
                    <Text style={style.contenido}>{this.props.data.data.description}</Text>
                    <View style={style.btnContainer}>
                        <TouchableOpacity onPress={() => this.botonLike()}>
                            {this.state.miLike === false ?
                                <AntDesign name="hearto" size={24} color="white" />

                                : <AntDesign name="heart" size={24} color="#0d9900" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.homeProps.navigation.navigate('Comment', {id: this.props.data.id})}>
                            <FontAwesome5 style={style.btnComment} name="comment" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.contenido}>{this.state.cantidadDeLikes} likes</Text>
                    <TouchableOpacity onPress={()=> this.props.homeProps.navigation.navigate('Comment', {id: this.props.data.id})}>
                        <Text style={style.contenido}>{this.props.data.data.comments.length} comentarios</Text>
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
        width: '100vw'
    },
    flex: {
        flexDirection: 'row',
        flex: 2,
        width: '100%',
        justifyContent: 'space-between'
    },
    creador: {
        fontWeight: 600,
        color: 'rgb(230,230,230)',
        fontSize: 18,
        marginBottom: 3
    },
    btnContainer: {
        flexDirection: 'row',
        flex: 2,
    },
    btnComment: {
        marginLeft: 8
    },
    contenido: {
        fontSize: 16,
        color: 'rgb(230,230,230)',
        marginTop: 3
    },
    image: {
        width: '100%',
        height: 200
    },
    containerComments: {
        height: '100vh',
        width: '100vw',
    },
    crossComments: {
        marginBottom: 15
    }
})


export default Card;