// Navigation for housekeepers and households

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app/(tabs)/index';
import HouseholdDetails from './app/households/HouseholdDetails';
import HousekeepersDetails from './app/housekeepers/HousekeepersDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="HouseholdDetails" component={HouseholdDetails} />
        <Stack.Screen name="HousekeepersDetails" component={HousekeepersDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}