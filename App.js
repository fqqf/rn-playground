import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  RefreshControl
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/*
    <View style={styles.body}>
      <ScrollView horizontal>
      {
        Items.map((i) => {
          return (
            <View style={styles.item} key={i.key}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
          )
        })
      }
      </ScrollView>
      <ScrollView horizontal>
      {
        Items.map((i) => {
          return (
            <View style={styles.item} key={i.key}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
          )
        })
      }
      </ScrollView>
    </View>*/
 

const App = () => {
  const [Items, setItems] = useState( // using to define value
    [
      {key:1, item: 'a'},
      {key:2, item: 'b'},
      {key:3, item: 'c'},
      {key:4, item: 'd'},
      {key:5, item: 'e'},
      {key:6, item: 'f'},
      {key:7, item: 'g'},
      {key:8, item: 'h'},
      {key:9, item: 'i'},
      {key:10, item: 'j'},
    ]
  )

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key:69, item:'hgf'}])
    setRefreshing(false);
  } 

  return (
  < View style={styles.body}>
    <ScrollView 
      horizontal={false}
      refreshControl={
      <RefreshControl
       refreshing = {Refreshing}
       onRefresh = {onRefresh}
       colors = {['#ff00ff']}
      />
      }
    >
    {
      Items.map((item) => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.key}:{item.item}</Text>
          </View>
        )
      })
    }
    </ScrollView>
  </View>
 )
};



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
