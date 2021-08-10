import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const handleNav = (): void => {

  }
  return (
    <>
      <Text>If it's stupid and it works, it's still stupid and you're lucky.</Text>
      <Text>-Seventy Maxims of Maximally Effective Mercenaries</Text>
      <Button title={'News'} onPress={handleNav}/>
    </>
  );
}

export default HomeScreen;