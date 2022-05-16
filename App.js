import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PizzaBuilder from './Screen/PizzaBuilder';
import MyOrder from './Screen/MyOrder';
import Cart from './Screen/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Login from './Screen/Login';
import Register from './Screen/Register';

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
            options={({navigation})=>({
              title:"My Order",
              headerStyle:{
                backgroundColor:"orange",
              },
              headerTitleStyle:{
              color:"#FFFFFF",
              fontFamily:'PlayfairDisplay-SemiBold'
              },
            headerLeft:() =>(
              <TouchableOpacity accessibilityLabel='back' onPress={() =>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle:{
              marginStart:10
            }
            })}
        />
        <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation})=>({
              title:"My Cart",
              headerStyle:{
                backgroundColor:"orange",
              },
              headerTitleStyle:{
              color:"#FFFFFF",
              fontFamily:'PlayfairDisplay-SemiBold'
              },
            headerLeft:() =>(
              <TouchableOpacity accessibilityLabel='back' onPress={() =>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle:{
              marginStart:10
            }
            })}
            
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}} 
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}} 
        />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}