import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function LegalAidScreen() {

    const[clinics, setCards]  = useState([
         {
            id: '1',
            image: require('../assets/voc.jpg'),
            type:'Vocational Training',
            link: 'https://www.aicte-india.org/education/vocational-education'
          },
          {
            id: '2',
            image: require('../assets/mh.jpg'),
            type:'Mental Health',
            link:'https://www.mind.org.uk/information-support/tips-for-everyday-living/wellbeing/'
          },
          {
            id: '3',
            image: require('../assets/relap.jpg'),
            type:'Relapse Prevention',
            link:'https://recoverycentersofamerica.com/blogs/top-5-things-to-do-to-avoid-relapse/'
          }
      ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Legal Aid Clinic</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {clinics.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Image source={card.image} resizeMode= 'cover' style={styles.image} />
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
              <Text style={styles.dets}>{card.type}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'justify',
    marginBottom: 2,
    color:'#00008B',
    paddingHorizontal:12
  },
  cardContainer: {
    marginHorizontal:10,
    width: 310,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderBottomColor: '#ccc',
  },
  dets: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {
    flex: 1,
  },
  carouselContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  image: {
    height: '75%',
    width :'100%',
    marginBottom: 10,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
});


