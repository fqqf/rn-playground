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
  const [Items, setItems] = useState(
    [
      {key:1, item: 'Item 1'},
      {key:2, item: 'Item x'},
      {key:3, item: 'Item 3'},
      {key:4, item: 'Item 4'},
      {key:5, item: 'Item 5'},
      {key:6, item: 'Item 6'},
      {key:7, item: 'Item 7'},
      {key:8, item: 'Item 8'},
      {key:9, item: 'Item 9'},
      {key:10, item: 'Item 10'},
    ]
  )

  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.row2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      
      <View style={styles.row3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
  },
  row1: {
    flex : 10,
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  row2: {
    flex : 20,
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  row3: {
    flex : 70,
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  view1: {
    flex: 20,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
  },
  view2: {
    flex: 30,
    backgroundColor: '#ff0fff',
    justifyContent: 'center',
  },
  view3: {
    flex: 50,
    backgroundColor: '#ffff00',
    justifyContent: 'center'
  },
  view4: {
    flex: 50,
    backgroundColor: '#ff0000',
    justifyContent: 'center'
  },
  view5: {
    flex: 50,
    backgroundColor: '#00ff00',
    justifyContent: 'center'
  },
  view6: {
    flex: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  view7: {
    flex: 50,
    backgroundColor: '#0000ff',
    justifyContent: 'center'
  },
  f_view1: {
    height: 100,
    width: 100,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f_view2: {
    height: 100,
    width: 100,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f_view3: {
    height: 100,
    width: 100,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f_text: {
    color: '#000000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    fontSize: 45,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    alignSelf: 'center',
  },
  button: {
    width: 200,
    height: 100,
    margin: 0,
  }
});

export default App;
