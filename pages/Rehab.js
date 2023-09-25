import * as React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
export default function RehabScreen() {
  const rehabData = [
    {
      id: '1',
      image: require('../assets/voc.jpg'),
      type:'Vocational Training',
      link:'https://www.aicte-india.org/education/vocational-education'
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
  ];
  
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>
      {<WebView 
          style = {styles.container}
          source = {{uri: item.link }}
          onLoad={console.log("Loaded")}
      />}}>
      <Image style={styles.image} resizeMode='cover' source={item.image}/>
      <View style={styles.cardBody}>
        <Text style={styles.type}>{item.type}</Text>
        
      </View>
    </TouchableOpacity>
  );

  const filteredData = rehabData.filter((item) => {
    return item.type.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search programs..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.rehabListContainer}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
  },
  searchInputContainer:{
    paddingHorizontal:20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor:'#dcdcdc',
    backgroundColor:'#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  rehabListContainer:{
    paddingHorizontal:20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop:10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    height: 175,
    width :'100%',
    marginBottom: 10,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
