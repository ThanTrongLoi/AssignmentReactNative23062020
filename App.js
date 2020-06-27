import React, {Component} from 'react';
import {View,
        StyleSheet,
        Text,
        StatusBar} from "react-native";

import Routes from './src/Routes';

export default class App extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <StatusBar
                    backgroundColor = '#4f9a94'
                    barStyle = 'light-content'/>
                <Routes/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80cbc4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})