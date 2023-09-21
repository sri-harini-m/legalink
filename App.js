import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import ProceedingsScreen from './pages/Proceedings';
import AttorneyScreen from './pages/Attorneys';
import ResourcesScreen from './pages/Resources';
import RehabScreen from './pages/Rehab';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import DrawerItems from './constants/MenuItems';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
       drawerType="front"
       initialRouteName="Login Screen"
       drawerContentOptions={{
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
          :
<FontAwesome5
              name={drawer.iconName}
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
            
          }}
          component = {
            //drawer.name==='LoginScreen' ? LoginScreen
              drawer.name==='Home' ? HomeScreen
              : drawer.name==='Profile' ? ProfileScreen
              : drawer.name==='Attorneys' ? AttorneyScreen
                :drawer.name==='Proceedings' ? ProceedingsScreen
                  :drawer.name==='Resources' ? ResourcesScreen
                    : RehabScreen
          }
/>)
       }
      </Drawer.Navigator>
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
