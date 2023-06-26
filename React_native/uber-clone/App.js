import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
