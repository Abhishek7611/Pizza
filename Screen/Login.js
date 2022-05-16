import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, FlatList, RefreshControl, ScrollView, Platform, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='orange' barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: 'white'
                    }]}
                >
                    <Text style={[styles.text_footer, {
                        color: 'black',
                        fontFamily:'PlayfairDisplay-SemiBold'
                    }]}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color={'black'}
                            size={20}
                        />
                        <TextInput 
                            placeholder="Your Username"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: 'black',
                                fontFamily:'PlayfairDisplay-SemiBold'
                            }]}
                        />
                    </View>

                    <Text style={[styles.text_footer, {
                        color: 'black',
                        marginTop: 35,
                        fontFamily:'PlayfairDisplay-SemiBold'
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather 
                            name="lock"
                            color={'black'}
                            size={20}
                        />
                        <TextInput 
                            placeholder="Your Password"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: 'black',
                                fontFamily:'PlayfairDisplay-SemiBold'
                            }]}
                        />
                    </View>
                    <TouchableOpacity>
                    <Text style={{color: 'orange', marginTop:15, fontFamily:'PlayfairDisplay-SemiBold'}}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {}}
                            style={[styles.signIn, {
                                borderColor: 'orange',
                                borderWidth: 1,
                                marginTop: 10,
                                backgroundColor:"orange"
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: 'white',
                                fontFamily:'PlayfairDisplay-Bold'
                            }]}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {this.props.navigation.navigate('Register')}}
                            style={[styles.signIn, {
                                borderColor: 'orange',
                                borderWidth: 1,
                                marginTop: 10
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: 'orange',
                                fontFamily:'PlayfairDisplay-Bold'
                            }]}>Register here !</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'orange'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontFamily:'PlayfairDisplay-SemiBold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSign: {
        fontSize: 18,
        // fontWeight: 'bold'
    }
  });