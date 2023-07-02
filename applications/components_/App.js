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
  ImageBackground,
  View
} from 'react-native';
import { Image } from 'react-native-animatable';
import MashButton from './CustomButton';
import CustomHeader from './CustomHeader';

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
    <ImageBackground 
    style={styles.body}
    source={require('./assets/background.jpg')}
    >
      <CustomHeader></CustomHeader>
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


      <MashButton
        onPressFunction={onPressHandler}
        title={sumbitted ? 'Clear' : 'Submit'}
      />
      <MashButton
        onPressFunction={()=>{}}
        title={'Test'}
        style={{margin: 10}}
      />


      {/* <Pressable
        style={({ pressed }) => [
          { backgroundColor: '#000000' },
          styles.button
        ]}
        onPress={onPressHandler}
        android_ripple={{ color: '#111111' }}
      >
        <Text style={styles.text_button}>
          {sumbitted ? 'Clear' : 'Submit'}
        </Text>

      </Pressable> */}



      {sumbitted ? 
      <View style={styles.body_opacity}>
        <Text style={styles.text}>You are registered as {name}</Text>
        <Image
        style={styles.image}
        source={require('./assets/done.png')}></Image>
        <Image
        style={styles.image}
        source={{uri: 'https://i1.sndcdn.com/avatars-yeDa29NEhjn4lKg4-pP72YA-t200x200.jpg'}}></Image>
      </View>
        :
        <Image
        style={styles.image}
        source={require('./assets/error.png')}></Image>
      }
    </ImageBackground>
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
  body_opacity: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
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
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  }
});

export default App;
