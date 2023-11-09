import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { React, Component } from 'react'
import Feed from '../screens/feed';

import Login from '../screens/login';
import Register from '../screens/register';
import Navegaciontab from './navegaciontab';


const Stack = createNativeStackNavigator (); 

export default class Navegacion extends Component {
render(

){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={ Register } options={ { headerShown: false }}/>
                <Stack.Screen name="Login" component={ Login } options={ { headerShown: false }}/>
                <Stack.Screen name="Feed" component={ Feed } options={ { headerShown: false }}/>
                <Stack.Screen name="Navegaciontab" component={ Navegaciontab } options={ { headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

}