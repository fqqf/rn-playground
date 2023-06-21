import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g John'
      onChangeText={(value)=> SetName(value.toString())}
      multiline
      secureTextEntry
      maxLength={10}
      />
      <Text style={styles.text}>Your name is {name}</Text>

    </View>
  )
};



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderColor: '#555',
    borderRadius: 5,
    margin: 10,
    textShadowColor: 'yellow',
    fontSize: 15,
  }
});

export default App;
