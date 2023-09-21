import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React  from 'react';
import {useState, useEffect}  from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from "firebase/auth";


import LoginScreen from './pages/LoginScreen';
import  SignupScreen  from "./pages/SignupScreen";
import { FIREBASE_AUTH } from './firebaseConfig';
import Dashboard  from "./pages/Dashboard";


const Stack = createNativeStackNavigator();


export default function App() {
  const auth = FIREBASE_AUTH
  const [user, setuser] = useState<User|null>(null);
  

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    console.log(user)
    setuser(user)
  })
},[])

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {user?(
                <Stack.Screen
                name="Dashboard"
                component={Dashboard}/>
      ):(
        <>
        <Stack.Screen
          name="Login"
          component={LoginScreen}/>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}/>         
        </>

      )
}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
