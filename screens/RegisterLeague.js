import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {hp, wp} from '../constants/theme';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import MyInput from '../components/MyInput';
import RadioButton from '../components/RadioButton';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import insertImage from '../assets/images/insertImage.png';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const JsonParse = async data => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

export const fetchData = async (
  url,
  body = null,
  type = 'application/json',
) => {
  try {
    console.log(body);
    let response = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      body,
    });
    let data = await response.text();
    data = await JsonParse(data);
    return {
      data,
    };
  } catch (error) {
    return false;
  }
};

const RegisterLeague = ({navigation, route}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  console.log('isRegistered :>> ', isRegistered);

  const SaveBtn = async () => {
    try {
      await AsyncStorage.setItem('Registered', JSON.stringify(true));
    } catch (e) {
      // saving error
    }
    navigation.navigate('Home');
    // let formdata = new FormData();
    // console.log('fetching');
    // formdata.append('firstname', firstName);
    // formdata.append('lastname', lastName);
    // formdata.append('phonenumber', phoneNumber);
    // formdata.append('gender', gender);
    // formdata.append('birthday', date);
    // const url = 'http://13.212.244.253/api/auth/register';
    // let res = await fetchData(url, formdata);
    // console.log('res', res);
    // if (res.data.success) {
    //   navigation.navigate('Login');
    // } else {
    //   showMessage({
    //     message: 'Register failed',
    //     type: 'warning',
    //   });
    //   setErroremail(res.data.error.email);
    //   setErrorName(res.data.error.name);
    //   setErrorpassword(res.data.error.password);
    // }
  };

  const [uploadImage, setUploadImage] = useState('empty');
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setUploadImage(image.path);
      // this.bs.current.snapTo(1);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
      cropping: true,
    }).then(image => {
      console.log(image);
      setUploadImage(image.path);
      // this.bs.current.snapTo(1);
    });
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: wp(5.6),
          marginTop: 20,
        }}>
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

        <Text style={{...FONTS.modalText1, marginTop: hp(2.22)}}>
          ????????????????????
        </Text>
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            ???? ?????? ?????????????????? ???????? ?????? ?????????????? ????. ?????????? ???????????????? ????????????????
            ???????????????????? ???????????????? ?????????????? ?????????????????? ??????????.
          </Text>
        </View>
      </View>
    );
  }

  const [gender, setGender] = useState([
    {id: 1, value: true, name: '??????????????', selected: false},
    {id: 2, value: false, name: '??????????????', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updateState = gender.map(genderItem =>
      genderItem.id == item.id
        ? {...genderItem, selected: true}
        : {...genderItem, selected: false},
    );
    setGender(updateState);
  };

  const [date, setDate] = useState('09-10-2020');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function bottomModal() {
    return (
      <View style={styles.modalContainer}>
        <Modal
          visible={isModalVisible}
          animationType="fade"
          transparent={true}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          style={{margin: 0}}>
          <View style={styles.modalBody}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() =>
                setModalVisible(!isModalVisible)
              }></TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={takePhotoFromCamera}>
              <Text style={styles.btnText}>TAKE PHOTO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={choosePhotoFromLibrary}>
              <Text style={styles.btnText}>CHOOSE FROM LIBRARY</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
  function renderInput() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.textInputTitle}>????????</Text>
          <MyInput
            placeholder="???? ?????????? ?????????????? ????."
            onChangeText={value => setFirstName(value)}
          />
          <Text style={styles.textInputTitle}>??????</Text>
          <MyInput
            placeholder="???? ?????????? ?????????????? ????."
            onChangeText={value => setLastName(value)}
          />
          <Text style={styles.textInputTitle}>????????</Text>
          <MyInput
            placeholder="???? ???????????? ???????????????? ?????????????? ????."
            keyboardType="numeric"
            maxLength={8}
            onChangeText={value => setPhoneNumber(value)}
          />
          <Text style={styles.textInputTitle}>????????</Text>
          <View style={styles.radioContainer}>
            {gender.map(item => (
              <RadioButton
                onPress={() => onRadioBtnClick(item)}
                selected={item.selected}
                value={item.value}
                key={item.id}>
                {item.name}
              </RadioButton>
            ))}
          </View>
          <Text style={styles.textInputTitle}>???????????? ???? ??????</Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY - MM - DD"
            minDate="1921-01-01"
            maxDate="2016-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderWidth: 0,
                alignItems: 'flex-start',
                marginLeft: wp(6.66),
              },
              dateText: {
                color: COLORS.brand,
                ...FONTS.dateAndBtnText,
              },
            }}
            onDateChange={date => {
              setDate(date);
            }}
          />
          <Text style={styles.textInputTitle}>???????????? ????????????????</Text>
          <MyInput placeholder="???????????????????? ?????????? ?????????? ????." />
          <Text style={styles.textInputTitle}>
            ???????????? ???????? ?????????? ?????????? ?????????????????? ??????????????
          </Text>
          <View style={{alignItems: 'center'}}>
            {uploadImage == 'empty' ? (
              <Image
                style={{width: 195, height: 107}}
                source={images.insertImage}
              />
            ) : (
              <Image
                source={{
                  uri: uploadImage,
                }}
                resizeMode="contain"
                style={{
                  width: wp(52),
                  height: hp(13.2),
                }}
              />
            )}
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => setModalVisible(!isModalVisible)}>
            <View style={styles.btnSubContainer}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  width: wp(6.4),
                  height: hp(2.96),
                  marginRight: wp(2.93),
                }}
              />
              <Text style={styles.btnText}>?????????? ????????????</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={SaveBtn}>
            <View style={styles.btnSubContainer}>
              <Text style={styles.btnText}>????????????????</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: COLORS.white}}>
        {renderHeader()}
        {renderInput()}
        {bottomModal()}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: '#F4B43A47',
    marginTop: hp(2.22),
    padding: hp(1.5),
    borderRadius: 12,
  },
  warningText: {
    color: COLORS.warningText,
    ...FONTS.warningText,
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    margin: wp(5),
  },
  textInputTitle: {
    ...FONTS.TextInputTitle,
    marginHorizontal: wp(6.66),
    marginTop: hp(1.72),
    marginBottom: hp(1.11),
  },
  radioContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: wp(40),
  },
  btnContainer: {
    width: wp(84.53),
    height: hp(5.43),
    borderRadius: 12,
    backgroundColor: COLORS.brand,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(7.735),
    marginTop: hp(2),
  },
  btnSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    ...FONTS.dateAndBtnText,
    color: COLORS.white,
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  modalBody: {
    height: '25%',
    marginTop: 'auto',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  closeBtn: {
    marginVertical: hp(1),
    borderRadius: 20,
    width: wp(20),
    height: hp(1.5),
    backgroundColor: COLORS.grey,
  },
  modalBtn: {
    width: wp(84.53),
    height: hp(5.43),
    borderRadius: 12,
    backgroundColor: COLORS.brand,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(7.735),
    marginTop: hp(2),
  },
});

export default RegisterLeague;
