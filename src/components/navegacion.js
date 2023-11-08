import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { React, Component } from 'react'

import Login from '../screens/login';
import Register from '../screens/register';


const Stack = createNativeStackNavigator (); 

export default class Navegacion extends Component {
render(

){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" Component={ Login }/>
                <Stack.Screen name="Register" Component={ Register }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

}