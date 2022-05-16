import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients: null,
            cartValue: 0,
            loginStatus: null
        }
    }

    componentDidMount(){
        this.getData()
        new Login().getLoginStatus().then((val)=>{
            console.log(val)
            this.setState({loginStatus: val})
        }).catch((e)=>console.log(e))
    }

// Reading Cart items.

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('ingredients')
          const cartValue = await AsyncStorage.getItem('cartValue')
          if(value !== null) {
            // value previously stored
            console.log(value)
            this.setState({ingredients: value})
            this.setState({cartValue: JSON.parse(cartValue)})
          }
        } catch(e) {
          // error reading value
          console.log(e)
          alert(e)
        }
      }

// Remove item from cart.

    removeItem = async() => {
        try {
            await AsyncStorage.removeItem('ingredients');
            await AsyncStorage.removeItem('cartValue');
            ToastAndroid.show("Item Deleted",ToastAndroid.SHORT)
            this.setState({ingredients: null})
            this.setState({cartValue: 0})
            // return true;
        }
        catch(e) {
            alert(e)
            console.log(e)
            // return false;
        }
    }

// Buy Now.

    buyNow=async()=>{
        await new Login().getLoginStatus().then((val)=>{
            console.log(val)
            this.setState({loginStatus: val})
        }).catch((e)=>console.log(e))
        if(this.state.loginStatus == true){
            this.props.navigation.navigate('PizzaBuilder')
            ToastAndroid.show("Your order done.",ToastAndroid.SHORT)
            this.removeItem()
        }else{
            this.props.navigation.navigate('Login')
        }
    }

// Add to My Order. 
    
    myOrder(){

    }


    render(){
        return(
            <View>
                <StatusBar barStyle = "default" hidden={false} backgroundColor = "orange"/>
                {this.state.ingredients == null ?
                <View style={styles.cartItemStyle}>
                     <Text style={styles.headerStyle}>Looks like you are not hungry. 😃</Text>
                </View>
                :
                <View style={styles.cartItemStyle}>
                    <Text style={styles.headerStyle}>Your Pizza</Text>
                    <Text numberOfLines={3} style={{fontFamily:'PlayfairDisplay-SemiBold'}}>Ingredients : {this.state.ingredients}</Text>
                    <Text style={styles.cartTotal}>Total Price : {this.state.cartValue}*</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.cartButtonStyle} onPress={()=>{this.buyNow()}}>
                            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                                <Text style={styles.cartButtonText}>Buy Now</Text>
                               
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cartButtonStyle} onPress={()=>{this.removeItem()}}>
                            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                                <Text style={styles.cartButtonText}>Delete</Text>
                             
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontFamily:'PlayfairDisplay-SemiBold'}}>* Rs. 50 for making charges and pizza roti.</Text>
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'black',
        // margin: 10,
        fontFamily:'PlayfairDisplay-SemiBold'
    },
    cartButtonStyle: {
        padding: 10,
        backgroundColor: "orange",
        borderRadius: 40,
        height: 40,
        margin: 10,
        width: "45%"
    },
    cartButtonText: {
        color: 'white',  
        fontFamily:'PlayfairDisplay-Bold', 
        fontSize: 16
    },
    cartTotal: {
        fontSize: 15,
        // fontWeight: 'bold',
        color: 'black',
        // margin: 10,
        fontFamily:'PlayfairDisplay-SemiBold'
    },
    cartItemStyle: {
        margin:10, 
        padding:10, 
        borderRadius: 10, 
        borderWidth:1, 
        borderColor: 'orange'
    }
});