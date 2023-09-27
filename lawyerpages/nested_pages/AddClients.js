import * as React from "react";
import { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../firebaseConfig";
import { getDoc } from "firebase/firestore";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export default function LMap({ navigation }) {
  const [uidText, setUidText] = useState(null);
  const [NameText, setNameText] = useState("");
  const auth = FIREBASE_AUTH;
  const uid = async (uid, Name) => {
    // const docRef = doc(FIREBASE_DB, "/users", uid);
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    await updateDoc(doc(FIREBASE_DB, "/users", auth.currentUser.uid), {
      Clients: arrayUnion({ Name: Name, Uid: uid }),
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Client Uid"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            setUidText(text);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Client Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            setNameText(text);
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          uid(uidText, NameText);
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Add Client </Text>
      </TouchableOpacity>
    </View>
  );
}
styles = StyleSheet.create({
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: { height: 50, color: "black" },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
