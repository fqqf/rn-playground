import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Alert,
  Button,
  Modal,
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
  const [showWarning, SetShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!sumbitted);
    } else {
      SetShowWarning(true);
    }
  }
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        onRequestClose={() => SetShowWarning(false)}
        transparent
        animationType='fade'
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal} >
            <View style={styles.warning_title}>
              <Text style={{fontSize:20, color: '#000000',}}>WARNING</Text>
            </View>
            <View style={styles.warning_body}>
            <Text style={{color: 'black', fontSize: 20, margin: 20, alignSelf: 'center'}}>Это самое место для твоего таланта</Text>
            </View>
            <Pressable
            style={styles.warning_button}
            onPress={()=>SetShowWarning(false)}
            android_ripple={{color: '#fff'}}
            >
              <Text style={styles.text_normal}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text selectable={true} selectionColor='orange' style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => SetName(value.toString())}
        multiline
        secureTextEntry
        maxLength={20}
        editable={!sumbitted}
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: '#000000' },
          styles.button
        ]}
        onPress={onPressHandler}
        android_ripple={{ color: '#111111' }}
      //activeOpacity={1}
      >
        <Text style={styles.text_button}>
          {sumbitted ? 'Clear' : 'Submit'}
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
    elevation: 10,
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
    margin: 20,
    fontStyle: 'italic',
  },
  text_normal: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    alignSelf: 'center',
  },
  text_button: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderColor: '#555',
    borderRadius: 5,
    textShadowColor: 'yellow',
    fontSize: 16,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    elevation: 10,
  },
  centered_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  warning_title:
  {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default App;
