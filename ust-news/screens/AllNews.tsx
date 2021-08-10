import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { AllNewsStyles } from '../styles/AllNews';
import NewsList from '../constants/MockData.json';
import DisplayNews from '../components/DisplayNews';
import NewsItem from '../models/NewsItem';
// import NewsList from '../models/NewsList';

type Props = {

}

const AllNews: React.FC<Props> = () => {
  
  return (
    <View style={AllNewsStyles.centerView}>
      {/* {console.log(NewsList)} */}
      <Text>All News</Text>
      <DisplayNews newsList={NewsList}/>
      </View>
  );
}

export default AllNews;
