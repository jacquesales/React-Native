import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import 'react-native-gesture-handler';



// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
            name="Login"
            component={Login}
          />

          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
