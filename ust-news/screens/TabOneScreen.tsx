import * as React from 'react';
import { Text, View } from '../components/Themed';
import { AllNewsStyles } from '../styles/AllNews';

export default function AllNews() {
  return (
    <View style={AllNewsStyles.centerView}>
      <Text>All News</Text>
    </View>
  );
}
