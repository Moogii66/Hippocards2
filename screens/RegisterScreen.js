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
import {hp, wp} from '../constants/theme';
import {images, icons, COLORS, SIZES, FONTS} from '../constants';
import MyInput from '../components/MyInput';
import RadioButton from '../components/RadioButton';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [image, setImage] = useState(images.insertImage);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
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
      setImage(image.path);
      // this.bs.current.snapTo(1);
    });
  };

  function renderHeader() {
    return (
      <View style={{flexDirection: 'column', marginHorizontal: wp(5.6)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
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
          БҮРТГҮҮЛЭХ
        </Text>
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            Та бүх мэдээллээ үнэн зөв оруулна уу. Худал мэдээлэл оруулсан
            тохиолдолд тэмцээнд оролцох боломжгүй болно.
          </Text>
        </View>
      </View>
    );
  }

  const [gender, setGender] = useState([
    {id: 1, value: true, name: 'Эмэгтэй', selected: false},
    {id: 2, value: false, name: 'Эрэгтэй', selected: false},
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
          <Text style={styles.textInputTitle}>Овог</Text>
          <MyInput
            placeholder="Та овгоо оруулна уу."
            onChangeText={value => setFirstName(value)}
          />
          <Text style={styles.textInputTitle}>Нэр</Text>
          <MyInput
            placeholder="Та нэрээ оруулна уу."
            onChangeText={value => setLastName(value)}
          />
          <Text style={styles.textInputTitle}>Утас</Text>
          <MyInput
            placeholder="Та утасны дугаараа оруулна уу."
            keyboardType="numeric"
            maxLength={8}
            onChangeText={value => setPhoneNumber(value)}
          />
          <Text style={styles.textInputTitle}>Хүйс</Text>
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
          <Text style={styles.textInputTitle}>Төрсөн он сар</Text>
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
          <Text style={styles.textInputTitle}>Сурдаг сургууль</Text>
          <MyInput placeholder="Сургуулийн нэрээ бичнэ үү." />
          <Text style={styles.textInputTitle}>
            Өөрийн цээж зураг эсвэл сурагчийн үнэмлэх
          </Text>

          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: image,
              }}
              resizeMode="contain"
              style={{
                width: wp(52),
                height: hp(13.2),
              }}
            />
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
              <Text style={styles.btnText}>ЗУРАГ ХУУЛАХ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              navigation.navigate('HomeScreen', {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
              });
            }}>
            <View style={styles.btnSubContainer}>
              <Text style={styles.btnText}>ХАДГАЛАХ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

export default RegisterScreen;
