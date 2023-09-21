import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { View } from 'react-native';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signOut } from "firebase/auth";

function Dashboard() {
    auth = FIREBASE_AUTH
    const signoutFirebase = async()=>{
        signOut(auth)

    }
    return (
     <View>
        <TouchableOpacity onPress={signoutFirebase}>
        <Text>signout</Text>
        </TouchableOpacity>
     </View>
    );
}

export default Dashboard;