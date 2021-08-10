import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from '../types';
import HomeScreen from '../screens/Homescreen';
import AllNews from '../screens/AllNews';

const Stack = createStackNavigator<StackParamList>();

/**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 * Main app navigator used to change pages{console.log('>> root nav')}
 * @returns Stack Navigator
 */
const RootNav: React.FC<unknown> = () => (
  <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="AllNews" component={AllNews}/>
  </Stack.Navigator>
);

export default RootNav;