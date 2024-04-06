import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PostDetails} from 'screens/index';
import {MainStackParamsList} from './types';

const Stack = createStackNavigator<MainStackParamsList>();
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
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

export default MainStack;
