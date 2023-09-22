import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FIREBASE_AUTH } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  let displayName = undefined;
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;
  console.log(typeof user.displayName);
  const signoutFirebase = async () => {
    {
      (" ");
    }
    signOut(auth);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>ME</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {typeof user.displayName != "string" ? "User" : user.displayName}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>0000000000</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoText}>Prison</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoText}>Did not commit war crimes :)</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Status:</Text>
          <Text style={styles.infoText}>On the run</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={signoutFirebase}>
            <Text style={styles.infoLabel}>signout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
  },
  body: {
    marginTop: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    fontSize: 72,
    fontWeight: "700",
  },
  nameContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666666",
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
});
