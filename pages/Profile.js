import * as React from 'react';
import { View, Text ,StyleSheet, SafeAreaView , Image , ScrollView} from "react-native";

export default function ProfileScreen() {
   return (
      <SafeAreaView style = {styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infocontainer}>
               <Text style={[styles.text, { fontWeight:"100", fontSize: 20}]}> Mark </Text>
               <Text style={[styles.text, {color: "#101010",fontSize:18}]}>Criminal(Alleged)</Text>
            </View>
         </ScrollView>   
      </SafeAreaView>
   );
 }

 const styles = StyleSheet.create({
      container: {
         flex:1,
         backgroundColor: "#AEB5BC",
         alignItems: "center",
         justifyContent: "center"
      },
      text:{
         fontFamily: "HelveticanNeue",
         color: "#101010"
      },
      infocontainer: {
        alignSelf:"center",
        alignItems:"center",
        marginTop:16

      }
 })