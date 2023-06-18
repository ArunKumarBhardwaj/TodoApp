import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoScreen from '../screens/TodoScreen/TodoScreen';

const Stack = createNativeStackNavigator();

// NAVIGATION FILE WHERE ALL OF OUR SCREEN WILL BE PLACED.

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
