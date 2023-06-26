import { useState } from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [sumbitted, SetSubmitted] = useState(false);
  const onPressHandler = ()=>
  {
    if (name.length > 3)
    {
      SetSubmitted(!sumbitted);
    } else {
      // Alert.alert(
      //   'Warning', 'The name must be longer than 3 characters', [
      //   {text: 'Do not show again', onPress:()=>console.warn('OK Pressed!')},
      //   {text: 'OK', onPress:()=>console.warn('OK Pressed!')},
      // ], {cancelable: true, onDismiss: ()=>console.warn('Alert dismissed!')})
      ToastAndroid.show('The name must be longer than 3 characters', ToastAndroid.SHORT)
    }
   }
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
      editable={!sumbitted}
      />
      {/* <Button style={styles.button}
      title={sumbitted? 'Clear':'Submit'}
      onPress={onPressHandler}
      color='#000'
      /> */}
      <Pressable
       style={({pressed})=>[
        {backgroundColor: '#000000'},
       styles.button
      ]}
       onPress={onPressHandler}
       android_ripple={{color: '#111111'}}
       //activeOpacity={1}
      >
      <Text style={styles.text_button}>
        {sumbitted? 'Clear':'Submit'}
      </Text>
      
      </Pressable>
      {sumbitted ? <Text style={styles.text}>
        You are registered as {name}
      </Text>
      : 
      null
      }
    </View>
  )
};



const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 40,
    margin: 4,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'black',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 4,
    fontStyle: 'italic',
  },
  text_button: {
    color: '#FFFFFF',
    fontSize: 20,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderColor: '#555',
    borderRadius: 5,
    textShadowColor: 'yellow',
    fontSize: 16,
  }
});

export default App;
