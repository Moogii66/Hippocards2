import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  Touchable,
} from 'react-native';
import {List, ListItem, Left, Body, Right, Button} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import {hp, wp} from '../constants/theme';

import {userData} from './data';
import {color} from 'react-native-reanimated';

const LeagueInfoScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.header}>
        <View>
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
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginHorizontal: 10}}>
            <Image
              source={require('../assets/icons/rule.png')}
              resizeMode="contain"
              style={{
                width: wp(6.6),
                height: hp(2.82),
              }}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('LeagueInfo')}>
            <View>
              <Text style={{...FONTS.text4}}>Тэмцээний дүрэм</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Image style={{width: 96, height: 98}} source={images.trophy} />
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: COLORS.green,
              width: wp(48.3),
              height: hp(3.5),
              paddingHorizontal: wp(3.3),
              borderRadius: 25,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.buttonText4,
                color: COLORS.white,
                textAlign: 'center',
              }}>
              5 өдөр : 14 цаг
            </Text>
          </View>
        </View>
        <View>
          <View>
            <FlatList
              style={{height: windowHeight}}
              data={userData}
              keyExtractor={({id}, index) => id}
              renderItem={({item, index}) => (
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Text style={{...FONTS.index}}> {index + 1} </Text>
                    </Left>
                    <Body>
                      <Text style={{...FONTS.playertext}}>{item.name}</Text>
                    </Body>
                    <Right>
                      <Text style={{color: COLORS.brand, ...FONTS.score}}>
                        {item.score}
                      </Text>
                    </Right>
                  </ListItem>

                  <View></View>
                </List>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeagueInfoScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5.6),
    marginTop: 10,
    // backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5.6),
  },
});
