import { useState } from 'react';
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
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <Text>Это самое место для твоего таланта</Text>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => SetName(value.toString())}
        multiline
        secureTextEntry
        maxLength={10}
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
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#999',
    borderRadius: 5,
  },
  centered_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
