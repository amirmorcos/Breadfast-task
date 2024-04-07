import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamsList} from 'navigation/mainStack/types';

export const useAppNavigation: () => NavigationProp<MainStackParamsList> =
  useNavigation;
