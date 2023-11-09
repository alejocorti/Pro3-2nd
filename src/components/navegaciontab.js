import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { React, Component } from 'react'
import Feed from '../screens/feed';
import Profile from '../screens/profile';
import NewPost from '../screens/newPost'

const Tab = createBottomTabNavigator();

export default class Navegaciontab extends Component {
    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name="Feed" component={Feed} />
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="NewPost" component={NewPost} />
                </Tab.Navigator>
        )
    }
}