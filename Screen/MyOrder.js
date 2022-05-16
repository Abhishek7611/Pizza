import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';

export default class MyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <StatusBar barStyle = "default" hidden={false} backgroundColor = "orange"/>
                <View style={styles.myOrderStyle}>
                     <Text style={styles.headerStyle}>Looks like you didn't shop with us try today. 😃</Text>
                </View>
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
    }
});