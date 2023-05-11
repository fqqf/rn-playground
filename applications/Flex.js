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

const App = () => {
  const [value, setValue] = useState(0);

  const [name, setName] = useState('mash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setValue(value + 1);
  };

  return (
    <View style={styles.body}>
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
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: 400,
    flexDirection: 'row',
    backgroundColor: '#332221',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  view1: {
    width: 100, 
    height: 100,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    width: 100, 
    height: 100,
    backgroundColor: '#00cccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    width: 100, 
    height: 100,
    backgroundColor: '#00aaaa',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    width: 200,
    height: 100,
    margin: 0,
  }
});

export default App;
