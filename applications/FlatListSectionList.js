import React, { useState } from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native';



const App = () => {
  const [Dictionary, setDictionary] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    }
    ]
  )

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    const counter= Dictionary.length + 1;
    setRefreshing(true);
    setDictionary([...Dictionary, {
      title: `Title ${counter}`,
      data: [`Item ${counter}-1`, `Item ${counter}-2`, `Item ${counter}-3`],
    }])
    setRefreshing(false);
  } 

  return (
    <SectionList
    keyExtractor={(item, index) => index.toString()}
    sections={Dictionary}
        refreshControl={
      <RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}
      />
    }
    renderItem={({item}) => (
        <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
        </View>
    )}
    renderSectionHeader={({section})=> (
      <View style={styles.header}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    )

  }
    />

    // FLATLIST EXAMPLE
     
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
  },
});

export default App;
