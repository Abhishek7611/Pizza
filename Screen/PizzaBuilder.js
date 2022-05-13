import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PizzaBuilder extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <Text style={styles.headerText}>Customize Your Pizza</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText : {
        fontSize: 30,
        fontWeight:"bold",
        margin: 10,
        color: "black",
        
    }
});