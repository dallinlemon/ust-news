import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeStyle } from '../styles/HomeStyles';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {
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

export default HomeScreen;