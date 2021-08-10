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
  <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'Home'}}/>
    <Stack.Screen name="AllNews" component={AllNews} options={{headerTitle: 'News'}}/>
  </Stack.Navigator>
);

export default RootNav;