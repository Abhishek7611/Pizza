import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView } from 'react-native';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <StatusBar barStyle = "default" hidden={false} backgroundColor = "orange"/>
                <Text style={styles.headerStyle}>Looks like you are not hungry.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        // fontWeight: 'bold',
        color: 'black',
        margin: 10,
        fontFamily:'PlayfairDisplay-SemiBold'
    }
});