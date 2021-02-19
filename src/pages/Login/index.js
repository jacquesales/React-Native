import React from 'react';
import { StyleSheet, ImageBackground, View, Image, TextInput } from "react-native"
import { Button } from 'react-native-paper';

const background = { uri: "https://imgur.com/gLSIXj2.png" };
const logo = { uri: "https://imgur.com/GmrfPah.png" };


const Login = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>

      <View style={styles.logo}>
        <Image source={logo} style={styles.logo}>
        </Image>
      </View>

      <View style={styles.main}>
        <TextInput style={styles.form}      
          placeholder="Digite seu email..." />

        <TextInput style={styles.form}      
          placeholder="Digite sua senha..." />
       
        <Button style={styles.btn}
          mode="contained" 
          onPress={() => navigation.navigate('Home')} >
            Entrar
        </Button>
      </View>

      <View style={styles.footer}>
        <Button
        color="#FFF"
          onPress={() => navigation.navigate('Cadastro')} >
            Criar conta
        </Button>
      </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,   
    justifyContent: "center",
    alignItems: 'center',
  },
  logo: {
    flex: .65,
    marginTop: 80,  
    width: '60%',
    justifyContent: "center",
    alignItems: 'center',
  },
  main: { 
    width: '80%'
  },
  form: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 50,
    paddingLeft: 8,
    marginBottom: 8,
  },
  btn: {
    backgroundColor: '#CD0A0A',
    padding: 4,
    borderRadius: 5,
  },
  footer: {
    marginTop: 5,
  }
});

export default Login;