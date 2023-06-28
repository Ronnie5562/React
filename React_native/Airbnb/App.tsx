/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router'; 

function App(): JSX.Element {
   return (
    <>
      <StatusBar barStyle={"dark-content"} />
      {/* <HomeScreen /> */}
      {/* <Post 
        post={post1}
      /> */}
      {/* <SearchResultsScreen /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestsScreen /> */}
      <Router />
    </>
  );
}

export default App;