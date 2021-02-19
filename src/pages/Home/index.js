import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, ScrollView } from "react-native";
import { Paragraph } from 'react-native-paper';

import Cards from '../../components/Cards';

const filter = { uri: "https://imgur.com/jz1nx0e.png" };

const Home = ({ navigation }) => {

  const showAlert = () =>{
    Alert.alert(
       'Filtro aplicado :)'
    )
 }
  
  return (
    <ScrollView style={styles.container}>


      <View style={styles.header}>
        
        <View style={styles.headerTop}>
          <Text style={styles.txtHeader}>O que você quer preparar hoje? </Text>
          <Image source={filter} style={styles.imgFilter}></Image>
          <Text 
          style={styles.txtFilter}
          onPress={ showAlert } >
            Filtro 
          </Text> 
        </View>

        <View>          
        <TextInput style={styles.search}
          placeholder="Pesquise aqui seu menu de hoje" />
        </View> 
      </View>

      

      <View style={styles.main}>

        <View style={styles.txt}>
          <Paragraph>Receitas da semana</Paragraph>          
        </View>

        <View style={styles.images}> 
          <Cards />
        </View>


      </View>

      <View /* style={styles.footer} */>
      </View>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,     
  },
  header: {
    backgroundColor: '#CD0A0A',
    width: "100%",
    height: 120,
    padding: 15,
    marginBottom: 20, 
  },
  txtHeader: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtFilter: {
    color: "#FFF",
  },
  imgFilter: {
    flex: .5,
  },
  search: {
    marginTop: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    elevation: 8,
    width: '100%',
    height: 50,
    paddingLeft: 8,
    marginBottom: 8,
  },
  txt: {
    marginLeft: 8,
  },
  subtitle: {
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#892cdc',
    fontSize: 20
  }
});

export default Home;