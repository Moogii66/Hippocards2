import React from 'react';
import {
   Text,
   TouchableOpacity,
   StyleSheet,
   Image,
   View,
} from 'react-native';
import { icons } from '../constants';
import { COLORS, FONTS, hp, wp } from '../constants/theme';

const MyButton = () => {
   return (
      <TouchableOpacity style={styles.btnContainer}>
         <View style={styles.subContainer}>
            <Image
               source={icons.camera}
               resizeMode='contain'
               style={{
                  width: wp(6.4),
                  height: hp(2.96),
                  marginRight: wp(2.93)
               }}
            />
            <Text style={styles.btnText}>ЗУРАГ ХУУЛАХ</Text>
         </View>
      </TouchableOpacity>
   );
};
const styles = StyleSheet.create({
   btnContainer: {
      width: wp(84.53),
      height: hp(5.43),
      borderRadius: 12,
      backgroundColor: COLORS.brand,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: wp(7.735)
   },
   subContainer: {
      flexDirection: "row",
      alignItems: "center"
   },
   btnText: {
      ...FONTS.dateAndBtnText,
      color: COLORS.white
   },
})

export default MyButton;