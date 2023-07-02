import React from "react";
import {
   StyleSheet, 
   Pressable,
   Text
  } from "react-native";

const MashButton = (props) => {
    return (
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: '#000000' },
          styles.button,
          {...props.style}
        ]}
        onPress={props.onPressFunction}
        android_ripple={{ color: '#111111' }}
      >
        <Text style={styles.text_button}>
          {props.title}
        </Text>
      </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        height: 40,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor: 'black',
        elevation: 10,
    },
    text_button: {
        color: '#FFFFFF',
        fontSize: 20,
    },
})

export default MashButton;