
import React from "react";
import {Text, Button, View} from "react-native";


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/Home";
import Add from "./screens/Add";
import Edit from "./screens/Edit";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerStyle:{
                        backgroundColor: "#00cf70"},
                    title:"Netflix Store",
                    headerTitleAlign:"center",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                        alignItems:"center"
                    }
                }}
                    
            />
            <Stack.Screen 
                name="Edit"
                component={Edit}
                options={{
                    headerStyle:{
                        backgroundColor: "#00cf70"},
                    title:"Netflix Store",
                    headerTitleAlign:"center",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                        alignItems:"center"
                    }
                }}
                    
            />
            <Stack.Screen 
                name="Add"
                component={Add}
                options={{
                    headerStyle:{
                        backgroundColor: "#00cf70"},
                    title:"Netflix Store",
                    headerTitleAlign:"center",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                        alignItems:"center"
                    }
                }}
                    
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

