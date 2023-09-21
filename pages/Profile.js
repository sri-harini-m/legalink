import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { FIREBASE_AUTH } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  let displayName = "User!";
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;
  if (user !== null) {
    displayName = user.displayName;
  }
  const signoutFirebase = async () => {
    signOut(auth);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infocontainer}>
          <Text style={[styles.text, { fontWeight: "100", fontSize: 20 }]}>
            {" "}
            {displayName}{" "}
          </Text>
          <Text style={[styles.text, { color: "#101010", fontSize: 18 }]}>
            Criminal(Alleged)
          </Text>
          <TouchableOpacity onPress={signoutFirebase}>
            <Text>signout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEB5BC",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "HelveticanNeue",
    color: "#101010",
  },
  infocontainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
});
