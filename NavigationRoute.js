import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from  './screens/Home';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default class NavigationRoute extends Component {
 constructor(props) {
     super(props)
     this.state = {

     }
 }

 render() {
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName={"home"}>
                <Stack.Screen name="home" component={Home} options={{title: "Home Page"}} />
                <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
             </Stack.Navigator>
         </NavigationContainer>
     )
 }
} 