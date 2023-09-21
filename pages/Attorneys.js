import * as React from 'react';
import { View, Text, Button , Alert } from "react-native";

export default function AttorneyScreen() {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Button
         title = "Lawyers"
         onPress={() => Alert.alert(
            '192.1.181.01')}
   />
<Text style={{fontSize:16,fontWeight:'700'}}>Attorney Screen</Text>
</View>
   );
 }