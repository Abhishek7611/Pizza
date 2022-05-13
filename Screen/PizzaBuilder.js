import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class PizzaBuilder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
            list: [
                {"id":1,"item":"Onion","price":10,image:require("../images/onion.jpeg")},
                {"id":2,"item":"Cheese","price":20,image:require("../images/cheese.jpeg")},
                {"id":3,"item":"Roasted Garlic","price":10,image:require("../images/garlic.jpeg")},
                {"id":4,"item":"Tomato","price":10,image:require("../images/tomato.jpeg")},
                {"id":5,"item":"Spinch","price":10,image:require("../images/spinch.jpg")}
            ],
            itemCount: 0
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

    render(){
        return(
            <View>
                <StatusBar barStyle = "default" hidden={true} backgroundColor = "orange"/>
               
                <Image 
                    source={require("../images/pizza.jpeg")}
                    style={{width:"100%", height: 150, resizeMode: 'stretch'}}
                />

                <Text style={styles.headerText}>Customize Your Pizza</Text>
                {/* <ScrollView nestedScrollEnabled={true}> */}
                <View style={styles.itemStyle}>
                
                    <FlatList 
                        keyExtractor={(item,i) => item}
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
                                <View style={{flex:1/2}} key={item.id}>
                                    <Card containerStyle={styles.cardContainer}>
                                        <View style={{flexDirection:'row',alignSelf:'flex-end'}}> 
                                            <TouchableOpacity style={styles.cardTitle} onPress={()=>{}}>
                                                <AntDesign name="plussquareo" size={22} color="orange"/>
                                            </TouchableOpacity>
                                            <Text style={{color: 'black'}}> {this.state.itemCount}</Text>
                                            <TouchableOpacity style={styles.cardTitle} onPress={()=>{}}>
                                                <AntDesign name="minussquareo" size={22} color="#2196F3"/>
                                            </TouchableOpacity>
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
                    
                    
                    
                </View>
                {/* </ScrollView> */}
                <TouchableOpacity style={styles.cartButtonStyle}>
                        <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                            <Text style={styles.cartButtonText}>Add to Cart </Text>
                            <AntDesign name="shoppingcart" size={22} color="white"/>
                        </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight:"bold",
        margin: 10,
        color: "black",
        
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
        fontWeight: 'bold'
    },
    cartButtonStyle: {
        padding: 10,
        backgroundColor: "orange",
        borderRadius: 5,
        height: 45,
        margin: 10
    },
    cartButtonText: {
        color: 'white',  
        fontWeight: 'bold', 
        fontSize: 18
    }
});