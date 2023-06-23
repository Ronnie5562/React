/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [items, setItems] = useState([
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: 'Item 4'},
    { name: 'Item 5'},
    { name: 'Item 6'},
    { name: 'Item 7'},
    { name: 'Item 8'},
    { name: 'Item 9'},
    { name: 'Item 10'},
    { name: 'Item 11'},
    { name: 'Item 12'},
    { name: 'Item 13'},
    { name: 'Item 14'},
    { name: 'Item 15'},
  ]);
  // const [items, setItems] = useState([
  //   { key: 1, title: 'Item 1'},
  //   { key: 2, title: 'Item 2'},
  //   { key: 3, title: 'Item 3'},
  //   { key: 4, title: 'Item 4'},
  //   { key: 5, title: 'Item 5'},
  //   { key: 6, title: 'Item 12'},
  //   { key: 13, title: 'Item 13'},
  //   { key: 14, title: 'Item 14'},
  //   { key: 15, title: 'Item 15'},
  // ]);

  const [refreshing, setRefreshing] = useState(false)

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items, { key: 16, title: 'Item 16' }, { key: 17, title: 'Item 17' }]);
  //   setRefreshing(false);
  // }
  
  const [DATA, setDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    }
  ])
  const onRefresh = () => {
    setRefreshing(true);
    setDATA([...DATA, {
      title: `Title ${DATA.length + 1}`,
      data: [`Item ${DATA.length + 1}-1`, `Item ${DATA.length + 1}-2`, `Item ${DATA.length + 1}-3`],
    }]);
    setRefreshing(false);
  }

  return (
    <SectionList 
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        <Text style={styles.text}>{ item }</Text>
      )}

      renderSectionHeader={({section})=> (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
         </View>
      )}

      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  text: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 25,
    margin: 10,
  },
  item: {
    backgroundColor: '#46f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin : 20,
  }
});

export default App;