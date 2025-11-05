import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import RevaLogin from './src/screens/RevaLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Start with Splash */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={RevaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}