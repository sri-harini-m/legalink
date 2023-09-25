import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const AttorneysDetails = ({ route, navigation }) => {
  /* 2. Get the param */
  const { id, color, icon, name, occ, firm, education } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.photo} source={{ uri: icon }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{firm}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          <View style={styles.sectionContent}>
            {education.map((event, i) => {
              return (
                <View key={i}>
                  <Text style={styles.sectionItem}>{event}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Occupation</Text>

          <View style={styles.sectionContent}>
            <Text style={styles.sectionItem}>{occ}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>ABC Law Firm</Text>
              <Text style={styles.sectionItemDesc}>
                - Worked in the xyz company's law team and did lawstuff
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>
                patent team, XYZ Company (2020-2021)
              </Text>
              <Text style={styles.sectionItemDesc}>
                - worked in Salman Khan's law team for his popular case
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    color: "gray",
  },
  body: {},
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionContent: {
    marginTop: 8,
  },
  sectionItem: {
    marginVertical: 4,
  },
  sectionItemTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  sectionItemDesc: {
    fontSize: 14,
    color: "gray",
  },
});

export default AttorneysDetails;
