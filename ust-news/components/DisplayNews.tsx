import React, { useCallback } from 'react';
import { View, Text, Image, Pressable, Linking, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewsItem from '../models/NewsItem';
import NewsList from '../models/NewsList';
import { DisplayNewsStyles } from '../styles/AllNews';

type Props = {
  newsList: NewsList | undefined
}

const DisplayNews: React.FC<Props> = ({ newsList }): JSX.Element => {
    const handlePress = async (item: NewsItem) => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(item.url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(item.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${item.url}`);
      }
    };


  return (
    <>
      {newsList 
        ? (
          <ScrollView>
            {newsList.articles.map((item: NewsItem, index: number) => {
              if(index < 50) {
                return (
                  <Pressable style={DisplayNewsStyles.card} onPress={() => handlePress(item)} key={index}>
                    <Text style={DisplayNewsStyles.title}>{item.title}</Text>
                    <Text style={DisplayNewsStyles.text}>{item.description}</Text>   
                    {item.urlToImage && <Image style={DisplayNewsStyles.img} source={{uri: item.urlToImage}}/>}
                  </Pressable>
                )
              }
            })}
          </ScrollView>
        )
        : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
    </>
  )
}

export default DisplayNews;