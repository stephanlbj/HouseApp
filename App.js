 import React from 'react';
import {SafeAreaView, Image ,StatusBar, TouchableOpacity , StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCompo from './components/homeCompo'
import Main from './components/main'
import Details from './components/Details'

const Stack = createStackNavigator()


export default function App() {


  return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ="Home" component={HomeCompo} options={{headerShown:false}}/>
<Stack.Screen name ="Main" component={Main} options={{headerShown:false}}/>
<Stack.Screen name ="detail" component={Details} options={{headerTitle:false}}/>

</Stack.Navigator>
</NavigationContainer>
    
  )

}

