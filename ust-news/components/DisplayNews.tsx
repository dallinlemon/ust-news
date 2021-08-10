import React from 'react';
import { View, Text, Image, Pressable, GestureResponderEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewsItem from '../models/NewsItem';
import NewsList from '../models/NewsList';
import { DisplayNewsStyles } from '../styles/AllNews';

type Props = {
  newsList: NewsList | undefined
}

const DisplayNews: React.FC<Props> = ({ newsList }): JSX.Element => {
  const test = (event:  GestureResponderEvent) => {

  }
  return (
    <>
      {newsList 
        ? (
          <ScrollView>
            {newsList.articles.map((item: NewsItem, index: number) => {
              if(index < 50) {
                return (
                  <Pressable onPress={test} key={index}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>   
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