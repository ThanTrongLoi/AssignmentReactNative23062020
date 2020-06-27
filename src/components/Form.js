import React, {Component} from 'react';
import {View,
        StyleSheet,
        Text,
        TextInput,
        Dimensions,
        TouchableOpacity,} from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default class Logo extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <TextInput
                    style = {styles.inputBox}
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = 'Email'
                    placeholderTextColor = '#004D40'
                    selectionColor = '#fff'
                    keyboardType = 'email-address'
                    onSubmitEditing = {(input) => this.password.focus()}
                />
                <TextInput
                    style = {styles.inputBox}
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = 'Password'
                    secureTextEntry = {true}
                    placeholderTextColor = '#004D40'
                    ref = {(input) => this.password = input}
                />

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.btnText}>
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        paddingHorizontal: 18,
        color: '#004D40',
        fontSize: 18,
        fontWeight:'500',
        marginVertical: 10
    },
    button: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: '#4f9a94',
        borderRadius: 25,
        marginVertical: 10,
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})