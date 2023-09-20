import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Inputs from './inputs.js';

function LoginScreen(props){
    return (
       <Inputs />
    )
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default LoginScreen;
