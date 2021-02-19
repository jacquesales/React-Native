import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Paragraph } from 'react-native-paper';
import { Button } from 'react-native-paper';

const Cadastro = ({ navigation }) => {
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.txtHeader}>Realize seu cadastro e tenha acesso às melhores
          receitas de Chefs renomados do nosso país!
        </Text>
      </View>

      <View style={styles.main}>

      <Paragraph style={styles.label}>Nome</Paragraph>
      <View>      
        <TextInput style={styles.form}
        inlineImageLeft='username'
          placeholder="Digite seu nome completo" />        
       </View>  

        <View>
        <Paragraph style={styles.label}>Telefone</Paragraph>
        <TextInput style={styles.form}        
          placeholder="Digite seu número" />

        <Paragraph style={styles.label}>Email</Paragraph>
        <TextInput style={styles.form}
          placeholder="Digite seu email" />

        <Paragraph style={styles.label}>Senha</Paragraph>
        <TextInput style={styles.form}
          placeholder="Cadastre uma senha" />
       </View> 

       <Button style={styles.btn}
        mode="contained" 
        onPress={() => navigation.navigate('Home')} >
          Continuar
      </Button>
      </View>

      <View style={styles.footer}>

        <Button style={styles.socialBtn}
          icon="facebook"
          mode="outlined"
          color="#405D9B"          
          onPress={() => navigation.navigate('Home')} >
            Conecte-se com Facebook
        </Button>

        <Button style={styles.socialBtn}
          icon="google"
          mode="outlined"
          color="#ECAE00"         
          onPress={() => navigation.navigate('Home')} >          
            Conecte-se com Google
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
  },
  header: {
    backgroundColor: '#CD0A0A',
    height: 120,
    padding: 25,   
    marginBottom: 20, 
  },
  txtHeader: {
    color: "#FFF",    
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 20,
  },
  main: {
    
    width: '85%',
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    elevation: 8,
    width: '100%',
    height: 50,
    paddingLeft: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    color: "#682C0E",
  },
  btn: {
    marginTop: 12,
    backgroundColor: '#CD0A0A',
    padding: 4,
    borderRadius: 5,
  },
  footer: {
    marginTop: 35,
  },
  socialBtn: {
    marginBottom: 12,
  }
});

export default Cadastro;