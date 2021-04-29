import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  Pressable,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import {hp, wp} from '../constants/theme';
import Modal from 'react-native-modal';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  function modal() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="default" />
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={images.document}
                resizeMode="contain"
                style={{
                  width: wp(25.6),
                  height: hp(11.8),
                }}
              />
              <Text
                style={{
                  ...FONTS.modalText1,
                  color: COLORS.text,
                  marginTop: hp(3.58),
                }}>
                БҮРТГҮҮЛЭХ
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: wp(10.6),
                  ...FONTS.modalText2,
                  color: COLORS.text,
                  marginTop: hp(2),
                }}>
                Энэхүү тэмцээнд оролцохын тулд та дэлгэрэнгүй мэдээллээ оруулах
                ёстой.{' '}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonText}>БОЛИХ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonOK]}
                  onPress={() => {
                    navigation.navigate('RegisterLeague'),
                      setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.buttonText}>ОК</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  function renderHeader() {
    return (
      <View>
        <View style={{flexDirection: 'column', marginHorizontal: wp(3.7)}}>
          <Text style={{...FONTS.text1}}>Сайн уу!</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...FONTS.text2}}>Амараа</Text>
            <Image
              source={images.pro}
              resizeMode="contain"
              style={{
                width: wp(14),
                height: hp(4),
                marginLeft: wp(2.6),
                marginTop: -hp(0.7),
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.bannerCantainer}>
          <ImageBackground
            source={images.greenBackImage}
            style={{
              width: wp(92),
              height: hp(11),
            }}
            imageStyle={{borderRadius: 10}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={images.trophy}
                  style={{
                    width: wp(20),
                    height: hp(9.2),
                    marginTop: hp(1.9),
                    marginLeft: wp(2.4),
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: wp(3.7),
                  }}>
                  <Text style={{...FONTS.buttonText1, color: COLORS.white}}>
                    10 ЯЛАГЧ
                  </Text>
                  <View
                    style={{
                      justifyContent: 'center',
                      backgroundColor: COLORS.white,
                      width: wp(60),
                      height: hp(2.6),
                      paddingHorizontal: wp(3.3),
                      borderRadius: 25,
                      marginBottom: hp(0.76),
                    }}>
                    <Text
                      style={{
                        ...FONTS.buttonText2,
                        color: COLORS.greenText,
                      }}>
                      IELTS сургалт эрх + IELTS шалгалт
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: COLORS.yellow,
                      width: wp(26.3),
                      height: hp(2.3),
                      paddingHorizontal: wp(3.3),
                      borderRadius: 25,
                      alignSelf: 'flex-end',
                    }}>
                    <Text style={{...FONTS.buttonText3, color: COLORS.white}}>
                      5 өдөр : 14 цаг
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderButton()}
      {modal()}
      <Button
        onPress={() => {
          navigation.navigate('LeagueInfo');
        }}
        title="leagueinfo"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bannerCantainer: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: wp(76.8),
    height: hp(41.8),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: hp(5.06),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: hp(3.7),
    marginTop: hp(1.5),
  },
  button: {
    width: wp(29.3),
    height: hp(4.9),
    elevation: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    marginRight: wp(1.86),
    backgroundColor: COLORS.grey,
  },
  buttonOK: {
    marginLeft: wp(1.86),
    backgroundColor: COLORS.brand,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.modalButtonText,
  },
});

export default HomeScreen;
