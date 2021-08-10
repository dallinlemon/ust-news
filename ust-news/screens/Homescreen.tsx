import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native'
import { View } from '../components/Themed';
import { HomeStyle } from '../styles/HomeStyles';

type Props = {

}

export function HomeScreen() {
  const nav = useNavigation();
  const handleNav = () => {
    nav.navigate('AllNews');
  }

  return (
    <View style={HomeStyle.centerView}>
    <Text>If it's stupid and it works, it's still stupid and you're lucky.</Text>
    <Text>Seventy Maxims of Maximally Effective Mercenaries</Text>
    <Button title={'News'} onPress={handleNav}/>
    </View>
  );
}