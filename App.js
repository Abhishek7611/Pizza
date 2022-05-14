import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PizzaBuilder from './Screen/PizzaBuilder';
import MyOrder from './Screen/MyOrder';
import Cart from './Screen/Cart';

const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: 'white',
  },
};


export default class App extends React.Component{
 
  render(){
    return(
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
        <Stack.Screen
            name="PizzaBuilder"
            component={PizzaBuilder}
            options={{headerShown: false}} 
            // initialRoutename="Splash"
        />
        <Stack.Screen
            name="MyOrder"
            component={MyOrder}
            options={{headerShown: false}} 
        />
        <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}} 
        />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}