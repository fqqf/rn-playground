import {
  StyleSheet
} from "react-native";
import { Text, View } from "react-native-animatable";

const CustomHeader = (props) => {
    return (
     <View
      style={styles.view}
     >
      <Text style={styles.text}>
        React Native
      </Text>
     </View> 
    )
}
const styles = StyleSheet.create({
  view: {
    margin: 10,
    width: '95%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold'
  }
})

export default CustomHeader;