import React from 'react';
import {
   Text,
   View,
   StyleSheet
} from 'react-native';
import { hp, wp } from '../constants/theme';
import { images, icons, COLORS, SIZES, FONTS } from "../constants";
import { TouchableOpacity } from 'react-native-gesture-handler';

const RadioButton = ({ onPress, selected, children }) => {
   return (
      <View style={styles.radioButtonContainer}>
         <TouchableOpacity onPress={onPress} style={styles.radioButton}>
            {selected ? <View style={styles.radioButtonIcon} /> : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={onPress}>
            <Text style={styles.radioButtonText}>{children}</Text>
         </TouchableOpacity>
      </View>
   );
};
const styles = StyleSheet.create({
   radioButtonContainer: {
      height: 30,
      flexDirection: "row",
      alignItems: "center",
      marginLeft: wp(6.66),
   },
   radioButton: {
      width: wp(5.3),
      height: hp(2.47),
      borderRadius: 5,
      borderColor: COLORS.brand,
      borderWidth: 1.5,
      alignItems: "center",
      justifyContent: "center"
   },
   radioButtonIcon: {
      width: wp(5.3),
      height: hp(2.47),
      borderRadius: 5,
      backgroundColor: COLORS.brand,
   },
   radioButtonText: {
      color: COLORS.genderText,
      ...FONTS.genderText,
      marginLeft: wp(2.6)
   },
})


export default RadioButton;