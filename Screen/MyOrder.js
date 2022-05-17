import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import Cart from './Cart';
import { Card } from 'react-native-elements';

var arr = [], emptyArr = []
export default class MyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginStatus: null,
            list: null,
            refreshing: false
        }
    }

    componentDidMount(){
        this.getOrder()
    }

// Get Order.

    getOrder(){
        new Cart().getUser().then((user)=>{
            if(user != null){
                this.setState({loginStatus: true})
                database()
                .ref('/Orders/'+user)
                .on('value', snapshot => {
                    arr.length = 0
                    this.setState({list: null})
                    snapshot.forEach((child)=>{
                        // console.log(child.val())
                        arr.push(child.val())
                    })
                    this.setState({list: arr})
                    console.log(this.state.list)
                });
            }else{
                this.setState({loginStatus: null})
            }
        }).catch((e)=>console.log(e))
    }

// Refreshing.

    onRefresh=async()=>{
        try{
            this.setState({refreshing:true})
            await this.getOrder();
            // this.setState({list: list})
            this.setState({refreshing:false})
        }catch(e){
            alert("Error in refresh.")
        }
    }

    render(){
        return(
            <View>
                <StatusBar barStyle = "default" hidden={false} backgroundColor = "orange"/>
                {this.state.loginStatus == null || arr.length == 0 ?
                <View style={styles.myOrderStyle}>
                     <Text style={styles.headerStyle}>Looks like you didn't shop with us, Try today. 😃</Text>
                </View>
                :
                <FlatList 
                        keyExtractor={(item,i) => i}
                        data={this.state.list}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        numColumns={1}
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                        }
                        extraData={this.state}
                        // inverted
                        renderItem={({item,i}) => {
                            return(
                                <View style={{flex:1}} key={i}>
                                    <Card containerStyle={styles.cardContainer}>
                                    {/* <View style={styles.cartItemStyle}> */}
                                         <Text style={styles.headerStyle}>Your Pizza</Text>
                                         <Text numberOfLines={3} style={{fontFamily:'PlayfairDisplay-SemiBold'}}>Ingredients : {item.ingredients}</Text>
                                         <Text style={styles.cartTotal}>Total Price : {item.price}*</Text>
                                         <View style={{flexDirection: 'row'}}>
                                             <TouchableOpacity style={styles.cartButtonStyle} onPress={()=>{}}>
                                                 <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                                                     <Text style={styles.cartButtonText}>Buy Again</Text>

                                                 </View>
                                             </TouchableOpacity>

                                             <TouchableOpacity style={styles.cartButtonStyle} onPress={()=>{}}>
                                                 <View style={{flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
                                                     <Text style={styles.cartButtonText}>Rate us</Text>
                             
                                                 </View>
                                             </TouchableOpacity>
                                         </View>
                                         <Text style={{fontFamily:'PlayfairDisplay-SemiBold'}}>* Rs. 50 for making charges and pizza roti.</Text>
                                     {/* </View> */}
                                    </Card>
                                </View>
                        
                            );
                        }}
                    />
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
    myOrderStyle: {
        margin:10, 
        padding:10, 
        borderRadius: 10, 
        borderWidth:1, 
        borderColor: 'orange'
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
        flex:1,
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
});