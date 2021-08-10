import * as Linking from 'expo-linking';

/**
 * Defines the Apps deep linking configuration
 */
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      HomeScreen: 'HomeScreen',
      AllNews: 'AllNews',
      NotFound: '*',
    },
  },
};