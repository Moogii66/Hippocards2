import React, { useState } from 'react';
import {
   Text,
   View,
   SafeAreaView,
   TextInput,
   Image,
   StyleSheet
} from 'react-native';
import { hp, wp } from '../constants/theme';
import { images, icons, COLORS, SIZES, FONTS } from "../constants";

const MyInput = (props) => {
   const [text, onChangeText] = React.useState("Useless Text");
   const [number, onChangeNumber] = React.useState(null);
   const [textInput, selectedTextInput] = useState(false);
   return (
      <View
         style={[
            {
               backgroundColor: textInput
                  ? "#FF336628"
                  : "#FF336600",
            },
            styles.container,
         ]}>
         <TextInput
            {...props}
            style={styles.input}
            placeholder={props.placeholder}
            onFocus={() => selectedTextInput(true)}
            onBlur={() => selectedTextInput(false)}
         />
      </View >
   )
}
const styles = StyleSheet.create({
   container: {
      width: wp(86.4),
      height: hp(6.17),
      borderRadius: 14,
      alignSelf: 'center',
      justifyContent: "center",
      alignItems: "center"
   },
   input: {
      width: wp(84.6),
      height: hp(5.43),
      borderRadius: 12,
      borderWidth: 1.5,
      paddingLeft: wp(4),
      color: COLORS.Text,
      backgroundColor: COLORS.white,
      borderColor: COLORS.brand,
   },
});

export default MyInput;