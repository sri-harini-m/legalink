import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

function LoginScreen(props) {
    return (
        <View>
            <Text>Hello This should become the login page! </Text>

        </View>
    );
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