import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import {hp, wp} from '../constants/theme';
const LeagueInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ScrollView>
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
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image style={{width: 96, height: 98}} source={images.trophy} />
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  ...FONTS.text3,
                  textAlign: 'center',
                }}>
                Тэмцээний шагнал
              </Text>
            </View>
            <View style={{marginVertical: 15}}>
              <Text style={{...FONTS.modalText2}}>
                • IELTS-н шалгалтад бэлдэж,
              </Text>
              <Text style={{...FONTS.modalText2}}>
                • FARO IELTS 2 сарын сургалтын эрх,{' '}
              </Text>
              <Text style={{...FONTS.modalText2}}>
                • Уг шалгалтын төлбөрийг нь бүрэн төлнө.
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...FONTS.text3,
                  textAlign: 'center',
                }}>
                Тэмцээний журам
              </Text>
              <View style={{marginLeft: 14, marginTop: 19}}>
                <Text
                  style={{
                    ...FONTS.text3,
                    textAlign: 'left',
                  }}>
                  I -р шат
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{...FONTS.modalText2}}>
                  Hippocards апп дээрээс оролцох бөгөөд апп хэрэглэгч залуучууд
                  бүгд оролцох боломжтой байна.
                  <Text style={{color: '#FF3366'}}>
                    Цээжилсэн үгсийн оноогоор эрэмбэлэгдэнэ.
                  </Text>
                </Text>
              </View>
              <View style={{marginLeft: 14, marginTop: 19}}>
                <Text
                  style={{
                    ...FONTS.text3,
                    textAlign: 'left',
                  }}>
                  II -р шат
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{...FONTS.modalText2}}>
                  1-р шатнаас шигшигдсэн оролцогчдын дунд Hippocards аппаас
                  бэлдсэн асуултанд хариулна. Энэ нь өдөр бүр өөр өөр сэдвийн
                  дагуу ирэх бөгөөд{' '}
                  <Text style={{color: '#FF3366'}}>
                    1 удаа л оролцох боломжтой, хугацаатай байна.
                  </Text>{' '}
                  Энэ шатнаас 100 хүүхэд шалгаруулна.
                </Text>
              </View>
              <View style={{marginLeft: 14, marginTop: 19}}>
                <Text
                  style={{
                    ...FONTS.text3,
                    textAlign: 'left',
                  }}>
                  III -р шат
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{...FONTS.modalText2}}>
                  • IELTS Mock Test авна.
                </Text>
                <Text style={{...FONTS.modalText2}}>
                  • Сонгогдсон сэдвийн дагуу эсээ бичүүлж авна.
                </Text>
                <Text style={{...FONTS.modalText2}}>
                  • 30 хүүхэд шалгаруулна.{' '}
                </Text>
              </View>
              <View style={{marginLeft: 14, marginTop: 19}}>
                <Text
                  style={{
                    ...FONTS.text3,
                    textAlign: 'left',
                  }}>
                  IV -р шат
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{...FONTS.modalText2}}>
                  Зохион байгуулагж буй газруудын төлөөлөл хүмүүстэй{' '}
                  <Text style={{color: '#FF3366'}}> ярилцлага </Text>
                  хийнэ. Ингэснээр тэмцээний ялагч болох 10 хүн тодрох болно.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeagueInfoScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 33,
    marginTop: 10,
    // backgroundColor: '#E5E5E5',
  },
});
