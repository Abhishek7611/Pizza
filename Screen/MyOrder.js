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
                
            </View>
        );
    }
}