import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import {useState, useEffect}  from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from "firebase/auth";


import LoginScreen from './pages/LoginScreen';
import  SignupScreen  from "./pages/SignupScreen";
import { FIREBASE_AUTH, FIREBASE_DB } from './firebaseConfig';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import ProceedingsScreen from './pages/Proceedings';
import AttorneyScreen from './pages/Attorneys';
import LegalAidScreen from './pages/LegalAid';
import ResourcesScreen from './pages/Resources';
import RehabScreen from './pages/Rehab';
import AttorneysDetails  from "./pages/nested_pages/AttorneysDetails";

import LClientsScreen from "./lawyerpages/LClients";
import LHomeScreen from "./lawyerpages/LHome";
import LMapScreen from "./lawyerpages/LMap";
import LProfileScreen from "./lawyerpages/LProfile";
import LResourcesScreen from "./lawyerpages/LResources";
import LProceedingsScreen from "./lawyerpages/LProceedings";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import DrawerItems from './constants/MenuItems';
import LDrawerItems from './constants/LMenuItems';

import SignupScreenLawyer from './lawyerpages/SignupScreenLawyer';
import LoginScreenLawyer from './lawyerpages/LoginScreenLawyer';
import { doc, getDoc } from "firebase/firestore";
import { Console, error } from 'console';

// import { doc, updateDoc } from 'firebase/firestore';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = () =>{
  return(<Drawer.Navigator
    drawerType="front"
    initialRouteName="Login Screen"
    screenOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 10 },
    }}

>

    {
        DrawerItems.map(drawer=><Drawer.Screen
        key={drawer.name}
        name={drawer.name}
        options={{
        drawerIcon:({focused})=>
          drawer.iconType==='Material' ?
<MaterialCommunityIcons
              name={drawer.iconName}
              size={24}
              color={focused ? "#e91e63" : "black"}
          />
        :
        drawer.iconType==='Feather' ?
<Feather
            name={drawer.iconName}
            size={24}
            color={focused ? "#e91e63" : "black"}
          />
      : <></>    
        }}
        component = {
          //drawer.name==='LoginScreen' ? LoginScreen
            drawer.name==='Home' ? HomeScreen
            : drawer.name==='Profile' ? ProfileScreen
            : drawer.name==='Attorneys' ? AttorneyScreen
              :drawer.name==='Legal Aid' ? LegalAidScreen
              :drawer.name==='Proceedings' ? ProceedingsScreen
                :drawer.name==='Resources' ? ResourcesScreen
                  : RehabScreen
        }
/>)
      }
    </Drawer.Navigator>)
}
const LMainScreen = () =>{
  return(<Drawer.Navigator
    drawerType="front"
    initialRouteName="Login Screen"
    screenOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 10 },
    }}

>

    {
        LDrawerItems.map(drawer=><Drawer.Screen
        key={drawer.name}
        name={drawer.name}
        options={{
        drawerIcon:({focused})=>
          drawer.iconType==='Material' ?
<MaterialCommunityIcons
              name={drawer.iconName}
              size={24}
              color={focused ? "#e91e63" : "black"}
          />
        :
        drawer.iconType==='Feather' ?
<Feather
            name={drawer.iconName}
            size={24}
            color={focused ? "#e91e63" : "black"}
          />
      : <></>    
        }}
        component = {
          //drawer.name==='LoginScreen' ? LoginScreen
            drawer.name==='Home' ? LHomeScreen
            : drawer.name==='Profile' ? LProfileScreen
            : drawer.name==='Client' ? LClientsScreen
              :drawer.name==='Proceedings' ? LProceedingsScreen
                :drawer.name==='Resources' ? LResourcesScreen
                  : LMapScreen
        }
/>)
      }
    </Drawer.Navigator>)
}

const Permission = () =>{
  return(<View style={styles.centerContainer}><Text >Please allow location Permission</Text></View>)
}
const Loading = () =>{
  return(<View style={styles.centerContainer}><Text >Loading...</Text></View>)
}
export default function App() {
  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("no error");

  const auth = FIREBASE_AUTH
  const [user, setuser] = useState<User|null>(null);
  const [type, setType] = useState(null);

  // const getLocation = async () =>{
   
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     console.log(status)
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       console.log(errorMsg)
  //       return;
  //     }
      
  //     else{
  //     setErrorMsg(status)
  //     let location = await Location.getCurrentPositionAsync({});
  //     let latitude =  location.coords.latitude
  //     let longitude = location.coords.longitude
      
  //     const docRef = await updateDoc(
  //       doc(FIREBASE_DB, "/users", auth.currentUser.uid),
  //       {
  //         latitude: latitude,
  //         longitude: longitude,
  //       }
  //     );
  //     setLocation(location);
  //     console.log(JSON.stringify(Location))
  //   }
      
    
  // }

  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
       
  //       return;
  //     }
  //     else {
  //       setErrorMsg('granted');
  //     }
  //   })();
  // }, []);

  React.useEffect(() => {
    const config = async () => {
        let resf = await Location.requestForegroundPermissionsAsync();
        let resb = await Location.requestBackgroundPermissionsAsync();
        if (resf.status != 'granted' && resb.status !== 'granted') {
            console.log('Permission to access location was denied');
        } else {
            console.log('Permission to access location granted');
            setErrorMsg('granted');

        }
    };

    config();
}, []);

useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    setuser(user)
    console.log("user:", user)
    
    const docRef = doc(FIREBASE_DB, "/users", user.uid);
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setType(docSnap.data().Type)

  console.log("Document data:", type);
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  })
},[])

  return (
    <NavigationContainer>
  <Stack.Navigator>
             

      {
      (user == null && type == null)?(
        <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}/>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}/>
        <Stack.Screen
          name="LoginLawyer"
          component={LoginScreenLawyer}/>
        <Stack.Screen
          name="SignupLawyer"
          component={SignupScreenLawyer}/> 
          </Stack.Group>       
      )
      
      :
      (errorMsg !== 'granted')?(
      <Stack.Group>
        <Stack.Screen name="permission" component={Permission}/>
        </Stack.Group>

        ):
        ( type == "Lawyer")?(
          <Stack.Group>
            <Stack.Screen
          name="MainLawyer"
          component={LMainScreen}
      
          />  
            </Stack.Group>
    
            ):
            (type == "Client")?
      (    <Stack.Group>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
          />  
        <Stack.Screen
          name="AttorneysDetails"
          component={AttorneysDetails}/>

        </Stack.Group>
      ):(
        <Stack.Group>
        <Stack.Screen name="Loading" component={Loading}/>
        </Stack.Group>

      )
      
}
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Legalite"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
          />
            ),
          }}
          />
        </Stack.Navigator> */}
         
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
  centerContainer:{
    flex:1,
    justifyContent: "center",
alignItems: "center"


  },
  
});
