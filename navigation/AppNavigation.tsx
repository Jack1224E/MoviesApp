import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Add this line at the start of your App.js
import Homescreen from '../components/Homescreen';
const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
   
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation