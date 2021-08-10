import { StyleSheet } from "react-native"
export const HomeStyle = StyleSheet.create({
  centerView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  quote: {
    fontSize: 20
  },
  author: {
    fontSize: 10,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    elevation: 10,
    flexDirection: 'row',
    fontWeight: 'bold',
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    width: 90,
  },
  text: {
    color: 'blue'
  }
});