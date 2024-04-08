import {createStackNavigator} from '@react-navigation/stack';
import {BackIcon} from 'atoms/index';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import {HomeScreen, PostDetails} from 'screens/index';
import Images from 'themes/images';
import styles from './styles';
import {MainStackParamsList} from './types';

const Stack = createStackNavigator<MainStackParamsList>();
const MainStack = () => {
  const renderBackImage = useCallback(() => {
    return <BackIcon />;
  }, []);

  const renderHomeTitle = useCallback(() => {
    return <Image source={Images.logo} style={styles.logoImg} />;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackImage: renderBackImage,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: renderHomeTitle,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="PostDetails"
        options={({route}) => ({title: route.params.post.name})}
        component={PostDetails}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
