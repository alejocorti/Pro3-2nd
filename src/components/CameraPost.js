import { Camera, CameraType } from "expo-camera";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Ionicons, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { storage } from '../firebase/config';


class CameraPost extends Component{


    constructor(props){
        // super(props) se utiliza para llamar al constructor de la clase base "component"
        // permite que el constructor realice cualquier inicializacion o configuracion necesaria con las props 
        // se asegura que inicien correctamente las propiedades heredadas 
        // es importante para mantener la herencia y el comportamiento correcto de las props 
        super(props);
        // this.state refiere al objeto de estado de un componente en react 
        // el estado es un objeto que contiene datos que pueden cambiar a lo largo del ciclo de vida del componente 
        // se utiliza para iniciar el estado del componente 
        this.state = {
            // las siguientes 4 son propiedades 
            // props hace referencia a las props recibidas por el componente 
            // permission variable booleana que indica si se otorgo permiso para la camara 
            // photo cadena que representa la URL de la foto capturada 
            // showCamera es una variable booleana que determina si se muestra o no la interfaz 
            props: props,
            permission: false,
            photo: '',
            showCamera: false
        }
    };

    // el metodo componentDidMount es un metodo del ciclo de vida de un componente en react 
    // se llama automaticamente despues de que el componente se haya montado en el DOM
    // el DOM es una interfaz que permite acceder y manipular los elementos y contenido de un documento de manera programatica 
    // el DOM organiza los elementos del documento en una etrucutra de arbol, donde cada elemento es un nodo en el arbol 
    // en este caso se utiliza para solicitar los permisos de la camara cuando el componente CameraPost se monta 
    componentDidMount() {
        // dentro del metodo componentdidmount llamamos a Camera.requestCameraPermissionsAsync() que es una funcion 
        // esta funcion nos la proporciona la biblioteca expo-camera 
        // la funcion solicita los permisos de la camara al usuario de la aplicacion 
        // una vez resulta la promesa devuelta por requestCameraPermissionAsync se actualiza el estado del componente mediante setstate
        Camera.requestCameraPermissionsAsync()
        // el metodo then() se utiliza en promesas para especificar una funcion de devolucion 
        // el operador => es un arrow function en javascript, define funciones de manera mas concisa 
        .then(() => {
            // la funcion setState se utiliza para actualizar el estado del componente 
            // es un metodo proporcionado por la clase component de react 
            this.setState({
                // en javascript el this se utiliza para referirse a la instancia actual del componente 
                // si los permisos son concedidos, se establece el estado de permission en true y showcamera en true 
                // indica que el permiso se ha otorgado y debe mostrar la camara 
                permission: true,
                showCamera: true
            })
        })
        // catch es un metodo utilizado en javascript para capturar y manejar errores de bloques de codigo 
        // capturamos cualquier error que pueda ocurrir durante la solicitud 
        // si se produce un error se registra en la consola, y lo podemos manejar de manera adecuada
        .catch(error => console.log(error))
    }

    // el metodo takepicture se utiliza para capturar una foto utilizando la camara 
    // takepicture es un metodo de la clase camerapost 
    takePicture() {
        // intento acceder a un objeto que se llama metodosdecamara y llamar al metodo takepictureasync
        this.metodosDeCamara.takePictureAsync()
            // se encadena un then (metodo) para manejar la resolucion de la promesa devuelta por takepictureasync
            .then(photo => {
                // utilizamos setState para actualizar el estado del componente 
                // actualizo las propiedades photo y showcamera 
                this.setState({
                    photo: photo.uri,
                    showCamera: false
                })
            })
            // catch es un metodo utilizado en javascript para capturar y manejar errores de bloques de codigo 
            // capturamos cualquier error que pueda ocurrir durante la solicitud 
            // si se produce un error se registra en la consola, y lo podemos manejar de manera adecuada
            .catch(error => console.log(error))
    }

    // la funcion clearphoto se utiliza para borrar la foto capturada y vovler a mostrar interfaz de camara
    clearPhoto() {
        // llamamos a setState para actualizar las propiedades photo y showcamera 
        // al poner '' en photo, en vez de como arriba, se elimina la URL de la foto capturada 
        // al estar showcamera true, indica que se debe mostrar nuevamente la interfaz de la camara 
        this.setState({
            photo: '',
            showCamera: true,
        })
    }

    // la funcion savephoto se utiliza para guardar la foto capturada en el almacenamiento, en este caso firebase storage
    savePhoto(){
        // se llama a la funcion fetch pasando la URL de la foto capturada (this.satte.photo)
        // la funcion fetch se usa para realizar una solicitud http para obtener datos de imagen 
        fetch(this.state.photo)
         // despues del primer then, se obtiene la respuesta de la solicitud de http 
         // se llama a res.blob, la funcion blob convierte la respuesta en un objeto 
         // el objeto blob es un tipo de dato utilizado para datos binarios, como imagenes 
         .then(res=>res.blob()) 
         // aca en el siguiente then, se recibe el objeto blob que representa la imagen 
         .then(image =>{
            // se crea la referencia ref en firebase storage usando el metodo storage.ref()
            // proporciona una ruta unica para la imagen 
            // se usa el date.now para que imagen tenga un nomrbe unico 
           const ref=storage.ref(`photos/${Date.now()}.jpg`)
           // se llama al metodo put() de referencia ref, pasando el objeto blob 
           // esto sube la imagen al almacenamiento remoto de firebase 
           ref.put(image)
                // se completa la carga de la imagen) 
                .then(()=>{
                    // se llama al metodo getdownloadURL de ref para obtener la URL de descarga 
                   ref.getDownloadURL()
                        .then(url => {
                            // se obtiene la url de descarga y se pasa a this.props.onimageupload(url)
                            // es una funcion pasada como prop al componente camerapost
                            // esta funcion se encarga de manejar la URL de la imagen en algun otro componente 
                            this.props.onImageUpload(url);
                         })
                 })
         })
         // catch es un metodo utilizado en javascript para capturar y manejar errores de bloques de codigo 
         // capturamos cualquier error que pueda ocurrir durante la solicitud 
         // si se produce un error se registra en la consola, y lo podemos manejar de manera adecuada
         .catch(e=>console.log(e))
       }

       

    // el metodo render es parte del ciclo de vida de un componente en React 
    // se usa para renderizar y mostrar el contenido del componente en la interfaz de usuario 
    render(){
        // return es una declaracion utilizada en las funciones para devolver un valor o un conjunto de elementos 
        // return marca el inicio del retorno del JSX (javascript XML)
        // es una sintaxis similar a HTML utilizada en react para definir una estructura 
        return(
    
            <View style={style.container}>
                {this.state.showCamera===true ?
                    <React.Fragment>
                        <Camera
                            style={style.camera}
                            type={Camera.Constants.Type.back}
                            ref={metodosDeCamara => this.metodosDeCamara = metodosDeCamara}
                        />
                        <TouchableOpacity onPress={() => this.takePicture()} style={style.btnCapture}>
                            <Ionicons name="radio-button-on-sharp" size={66} color="green" />
                        </TouchableOpacity>
                    </React.Fragment>
                : null}
                {this.state.photo !== '' ?
                    <React.Fragment>
                        <Image
                            style={style.image}
                            source={{ uri: this.state.photo }}
                        />
                        <View style={style.checksDiv}>
                            <TouchableOpacity onPress={() => this.clearPhoto()}>
                                <Ionicons name="md-trash-sharp" size={40} color="red" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.savePhoto()}>
                                <AntDesign name="checkcircle" size={40} color="green" />
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
                    :
                    null
                }
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    camera: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    btnCapture: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0,  
        alignItems: 'center'
    },
    btnOff: {
        position: 'absolute',  
        right: 5, 
        top: 5
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    checksDiv:{ 
        position: 'absolute', 
        flexDirection: 'row',
        flex: 2,
        left: 0, 
        right: 0, 
        bottom: 0,  
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
export default CameraPost;