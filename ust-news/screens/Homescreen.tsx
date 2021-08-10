import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
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
      <Text style={HomeStyle.quote}>If it's stupid and it works, it's still stupid and you're lucky.</Text>
      <Text style={HomeStyle.author}>Seventy Maxims of Maximally Effective Mercenaries</Text>
      <Pressable style={HomeStyle.button} onPress={handleNav}>
        <Text style={HomeStyle.text}>News</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;