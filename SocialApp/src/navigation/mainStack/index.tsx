import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens/index';

const Stack = createStackNavigator();
const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <Stack.Screen
      name="Home"
      options={{
        headerTitle: 'My Feed',
      }}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export default MainStack;
