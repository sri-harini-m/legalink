import * as React from "react";
import { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from "react-native";

export default function AttorneyScreen({ navigation }) {
  const optionList = [
    {
      id: 1,
      color: "#999999",
      icon: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      name: "Laywer Cat",
      occ: " Defense Attorney",
      firm: "Feline Law Firm",
      education: ["feline Training acadamy", "catword law school"],
    },
    {
      id: 2,
      color: "#999999",
      icon: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000",
      name: "Laywer Dog",
      occ: "Prosecutor",
      firm: "Canine Law Firm",
      education: ["Brown dog", "catsSuck law school"],
    },
  ];
  const [options, setOptions] = useState(optionList);
  const [query, setQuery] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Search for Attorney..."
            underlineColorAndroid="transparent"
            onChangeText={(q) => setQuery(q)}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={options}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { borderColor: item.color }]}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.push("AttorneysDetails", item);
              }}
            >
              <View style={styles.cardContent}>
                <Image
                  style={[styles.image, styles.imageContent]}
                  source={{ uri: item.icon }}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.ooc}>
                  {"\nOccupation: "}
                  {item.occ}
                </Text>
                <Text style={styles.ooc}>
                  {"\nLaw Firm: "}
                  {item.firm}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 3,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "column",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "auto",
  },
  occ: {
    fontSize: 16,
    marginLeft: 10,
    alignSelf: "auto",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});
