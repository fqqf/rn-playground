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
      <Text style={styles.text}>{value * 5}</Text>
      <Button title="ADD" onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {value} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffaaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
