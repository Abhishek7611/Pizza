import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView, ToastAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FloatingAction } from "react-native-floating-action";
import CheckBox from '@react-native-community/checkbox';
var cartValue = 0;

const actions = [
    {
      text: "Cart",
    //   icon: require("../images/gallery.png"),
      name: "Cart",
      position: 1,
      color: "orange",
      textStyle:{fontFamily:'PlayfairDisplay-SemiBold'}
    },
    {
      text: "My Order",
    //   icon: require("../images/camera.png"),
      name: "My Order",
      position: 2,
      color: "orange",
      textStyle:{fontFamily:'PlayfairDisplay-SemiBold'}
    },
];

const list = [
    {id:0,item:"Onion",price:8,image:require("../images/onion.jpeg"),checked:false},
    {id:1,item:"Cheese",price:20,image:require("../images/cheese.jpeg"),checked:false},
    {id:2,item:"Roasted Garlic",price:10,image:require("../images/garlic.jpeg"),checked:false},
    {id:3,item:"Tomato",price:15,image:require("../images/tomato.jpeg"),checked:false},
    {id:4,item:"Spinch",price:13,image:require("../images/spinch.jpg"),checked:false}
];

export default class PizzaBuilder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
            list:list,
            cartValue: 0,
            checkBoxValue: false
        }
    }

// Check Box.

    checkThisBox=(itemID)=>{
        let list=this.state.list
        list[itemID].checked=!list[itemID].checked
        this.setState({list:list})
        if( this.state.list[itemID].checked == true ){
            cartValue += this.state.list[itemID].price
        }else{
            cartValue -= this.state.list[itemID].price
        }
     }

    
// Refreshing.

    onRefresh=async()=>{
        try{
            this.setState({refreshing:true})
            // await this.fetchFiles();
            this.setState({refreshing:false})
        }catch(e){
            alert("Error in refresh.")
        }
    }

// Add to Cart.

    addToCart(){
        console.log(cartValue)
        ToastAndroid.show("Total is : "+cartValue,ToastAndroid.SHORT)
    }

    render(){
        return(
            <View style={{height: "100%"}}>
                <View style={{height: "90%"}}>
                <StatusBar barStyle = "default" hidden={true} backgroundColor = "orange"/>
               
                <Image 
                    source={require("../images/pizza.jpeg")}
                    style={{width:"100%", height: 150, resizeMode: 'stretch'}}
                />

                <Text style={styles.headerText}>Customize Your Pizza</Text>
                
                {/* Ingredients List */}
                    <FlatList 
                        keyExtractor={(item,i) => i}
                        data={this.state.list}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        numColumns={2}
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                        }
                        // inverted
                        renderItem={({item,i}) => {
                            return(
                                <View style={{flex:1/2}} key={i}>
                                    <Card containerStyle={styles.cardContainer}>
                                        <View style={{flexDirection:'row',alignSelf:'flex-end'}}> 
                                            <CheckBox
                                                // disabled={false}
                                                value={this.state.list[item.id].checked}
                                                onValueChange={(newValue) => this.checkThisBox(item.id)}
                                            />
                                        </View>   
                                        <Image 
                                            source={item.image}
                                            style={{width:"100%", height: 100, resizeMode: 'contain'}}
                                        />
                                        <Text style={styles.listItemTextStyle} numberOfLines={2}>{item.item} @Rs.{item.price}</Text>
                                    </Card>
                                </View>
                        
                            );
                        }}
                    />
                {/* Ingredients List */}


                {/* FloatingAction Button */}
                <FloatingAction
                    color="#2196F3"
                    actions={actions}
                    dismissKeyboardOnPress={true}
                    onPressItem={name => { 
                        if(name == "My Order"){
                            this.props.navigation.navigate('MyOrder');
                        }else if(name == "Cart"){
                            this.props.navigation.navigate('Cart');
                        }else{}
                    }}  
                    
                />   
                {/* FloatingAction Button */}
                </View> 

                {/* Add To Cart Button */}
                <TouchableOpacity style={styles.cartButtonStyle} onPress={()=>{this.addToCart()}}>
                        <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                            <Text style={styles.cartButtonText}>Add to Cart </Text>
                            <AntDesign name="shoppingcart" size={22} color="white"/>
                        </View>
                </TouchableOpacity>
                {/* Add To Cart Button */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        // fontWeight:"bold",
        margin: 10,
        color: "black",
        fontFamily:'PlayfairDisplay-Bold'
    },
    itemStyle: {
        margin: 10,
        // height: "100%",
        // flex: 1
        
    },
    itemTextStyle: {
        fontSize: 20,
        color: "black"
    },
    cardContainer: {
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex:1/2,
        justifyContent:'space-evenly',
      //   borderColor:"#36454f",
        borderRadius:5,
        borderTopColor:'orange',
        borderBottomColor:'orange',
        borderEndColor:'#2196F3',
        borderStartColor:'#2196F3',
        // backgroundColor:'orange'
    },
    cardTitle: {
        alignSelf:'flex-end',
        flexDirection:'row',
        marginStart:5
    },
    listItemTextStyle: {
        color: 'black',
        fontSize: 15,
        fontFamily:'PlayfairDisplay-SemiBold'
    },
    cartButtonStyle: {
        padding: 10,
        backgroundColor: "orange",
        borderRadius: 45,
        height: 45,
        margin: 10
    },
    cartButtonText: {
        color: 'white',  
        fontFamily:'PlayfairDisplay-Bold', 
        fontSize: 18
    }
});