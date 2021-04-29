import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import {hp, wp} from '../constants/theme';
const LeagueInfoScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: wp(5.6),
            height: hp(1.82),
          }}
        />
      </TouchableOpacity>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 91, height: 91}} source={images.trophy} />
        </View>
      </View>
    </View>
  );
};

export default LeagueInfoScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5.6),
    marginTop: 20,
  },
});
