import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const options1 = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const date = new Date(Date.UTC(2023, 8, 18, 10, 0, 0));
  const dateTimeFormat3 = new Intl.DateTimeFormat("en-IN", options1).format(
    date
  );

  const events = [
    {
      id: 1,
      Title: "Civil Trial: Edward vs. Margapuri Dispute",
      Description:
        "The formal civil trial to resolve the dispute between Mark Edward and Sriharini Margapuri. Both parties will present their cases and evidence before the judge, who will make a final decision",
      Location: "Delhi District Court, Room 302",
      Date: Date.UTC(2023, 8, 18, 10, 0, 0),
      caseNumber: "Case #56789",
      judgeName: "Meowster Meowman",
      Status: "Upcoming",
      Notes: "Bring all relevant documents and ID",
    },
    {
      id: 2,
      Title: "Hearing for Case #12345",
      Description:
        "Preliminary hearing for the civil dispute between Mark Edward and Sriharini Margapuri",
      Location: "Delhi District Court, Room 302",
      Date: Date.UTC(2023, 9, 7, 10, 0, 0),
      caseNumber: "Case #12345",
      judgeName: "Saad Mujeeb",
      Status: "Completed",
      Notes: "Bring all relevant documents and ID",
    },
  ];

  return (
    <ScrollView>
      <Text style={styles.mainTitle}>Upcoming Events:</Text>

      <View style={styles.cardContent}>
        {events.map((event) => {
          return (
            <>
              {new Date(event.Date) > new Date() ? (
                <TouchableOpacity
                  style={[styles.card, { borderColor: "#999999" }]}
                >
                  <Text style={styles.Title} key={event.id}>
                    <Text style={styles.bold}>Title:</Text> {event.Title}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Description:</Text>
                    {event.Description}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>judge:</Text> {event.judgeName}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Status:</Text> {event.Status}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Case Number:</Text>{" "}
                    {event.caseNumber}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Notes:</Text> {event.Notes}
                  </Text>
                  <Text style={styles.Date}>
                    Due:{" "}
                    {new Intl.DateTimeFormat("en-IN", options1).format(
                      new Date(event.Date)
                    )}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </>
          );
        })}
      </View>
      <Text style={styles.mainTitle}>Past Events:</Text>

      <View style={styles.cardContent}>
        {events.map((event) => {
          return (
            <>
              {new Date(event.Date) < new Date() ? (
                <TouchableOpacity
                  style={[styles.card, { borderColor: "#999999" }]}
                >
                  <Text style={styles.Title} key={event.id}>
                    <Text style={styles.bold}>Title:</Text> {event.Title}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Description:</Text>
                    {event.Description}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>judge:</Text> {event.judgeName}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Status:</Text> {event.Status}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Case Number:</Text>{" "}
                    {event.caseNumber}
                  </Text>
                  <Text style={styles}>
                    <Text style={styles.bold}>Notes:</Text> {event.Notes}
                  </Text>
                  <Text style={styles.Date}>
                    Due:{" "}
                    {new Intl.DateTimeFormat("en-IN", options1).format(
                      new Date(event.Date)
                    )}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainTitle: {
    padding: 20,
    fontSize: 20,
  },
  Date: {
    fontSize: 10,
    textAlign: "right",
    paddingTop: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  Title: {
    fontSize: 20,
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
