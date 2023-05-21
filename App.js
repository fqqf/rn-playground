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
  RefreshControl,
  FlatList,
  SectionList
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
      {name: 'a'},
      {name: 'b'},
      {name: 'c'},
      {name: 'd'},
      {name: 'e'},
      {name: 'f'},
      {name: 'g'},
      {name: 'h'},
      {name: 'i'},
      {name: 'j'},
    ]
  )

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
  ]

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'lol'}])
    setRefreshing(false);
  } 

  return (
    <SectionList
    keyExtractor={(item, index) => index.toString()}
    sections={DATA}
    renderItem={({item}) => (
        <Text style={styles.text}>{item}</Text>
    )}
    renderSectionHeader={({section})=> (
      <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    )
  }
    />
    // <FlatList
    //   data={Items}
    //   refreshControl={
    //   <RefreshControl
    //    refreshing = {Refreshing}
    //    onRefresh = {onRefresh}
    //    colors = {['#ff00ff']}
    //   />
    //   }
    //   keyExtractor={(item, index)=> index.toString()}
    //   renderItem={({item}) => (
    //       <View style={styles.item}>
    //         <Text style={styles.text}>{item.name}</Text>
    //       </View>
    //   )}
    // />
  // < View style={styles.body}>
  //   <ScrollView 
  //     horizontal={false}
  //     refreshControl={
  //     <RefreshControl
  //      refreshing = {Refreshing}
  //      onRefresh = {onRefresh}
  //      colors = {['#ff00ff']}
  //     />
  //     }
  //   >
  //   {
  //     Items.map((item) => {
  //       return (
  //         <View style={styles.item} key={item.key}>
  //           <Text style={styles.text}>{item.key}:{item.item}</Text>
  //         </View>
  //       )
  //     })
  //   }
  //   </ScrollView>
  // </View>
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
