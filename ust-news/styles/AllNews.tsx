import { Dimensions, StyleSheet } from 'react-native';


const windowWidth = Dimensions.get('window').width;
export const AllNewsStyles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export const DisplayNewsStyles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 30
  },
  img: {
    width: '100%',
    height: windowWidth,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    marginVertical: 10
  }
});
