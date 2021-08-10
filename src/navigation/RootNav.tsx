import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/types';
import HomeScreen from '../components/home-screen/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

/**
 * Main app navigator used to change pages
 * @returns Stack Navigator
 */
const AppNavigator: React.FC<unknown> = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'HomeScreen' }} />
    {/* <Stack.Screen name="AllNews" component={HomeDrawerNavigator} options={{ title: 'All News' }} /> */}
  </Stack.Navigator>
);

export default AppNavigator;