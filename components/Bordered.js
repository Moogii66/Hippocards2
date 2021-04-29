import React from 'react';
import {
   View,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   SafeAreaView,
   Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { hp, wp } from '../constants/theme';
import { images, icons, COLORS, SIZES, FONTS } from "../constants";

const BorderedInput = (props) => {
   const textinput = React.createRef();
   const textinputRef = React.useRef(textinput);
   const { colors } = useTheme();
   React.useEffect(() => {
      Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
      return () => {
         Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
         Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
      };
   }, [props]);

   const _keyboardDidShow = () => {
      setActive(true);
   };

   const _keyboardDidHide = () => {
      setActive(false);
   };

   const [keybaordActive, setActive] = React.useState(false);
   const [inputActive, setInputActive] = React.useState(false);

   return (
      <View
         style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
               backgroundColor: inputActive
                  ? 'rgba(255, 51, 102, 0.35)'
                  : colors.bgColor,
               width: props.isPhone ? wp(72) : wp(92),
            },
            styles.fade,
         ]}>
         <View
            style={[
               styles.containerView,
               {
                  backgroundColor: colors.bgColor,
                  width: props.isPhone ? wp(70) : wp(90),
               },
            ]}>
            <TextInput
               {...props}
               // style={{color: colors.text, paddingLeft: wp(3)}}
               ref={textinputRef}
               onFocus={() => setInputActive(true)}
               onBlur={() => setInputActive(false)}
               keyboardAppearance={colors.isDark ? 'dark' : 'light'}
               // showSoftInputOnFocus={false}
               accessibilityElementsHidden={true}
            />
            {props.isPass && (
               <TouchableOpacity
                  style={styles.showPassIcon}
                  onPress={props.showPassIconOnpress}>
                  <Icon
                     name={props.passIcon}
                     color={props.placeholderTextColor}
                     size={hp(3)}
                  />
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   containerView: {
      borderColor: COLORS.brand,
      borderRadius: wp(4),
      borderWidth: 0.5,
      alignSelf: 'center',
      height: wp(13),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   fade: {
      padding: wp(1),
      alignSelf: 'center',
      borderRadius: wp(4.6),
      marginTop: hp(2),
   },
   showPassIcon: {
      position: 'absolute',
      zIndex: 100,
      right: wp(2),
      top: hp(1.5),
   },
   phone: {
      paddingLeft: wp(4),
   },
});

export { BorderedInput };