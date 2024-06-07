// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
