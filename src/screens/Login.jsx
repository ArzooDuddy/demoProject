import {
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import commonStyle from './commonStyle';
import styles from './loginstyle';
import color from '../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Email is required*');
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError('!Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };
  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Password is required*');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    } else if (
      !/\d/.test(password) ||
      !/[!@#$%^&*]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      setPasswordError(
        'Password must contain at least one digit, one special character, one lowercase letter, and one uppercase letter',
      );
      return false;
    }
    setPasswordError('');
    return true;
  };

  const isValidEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
      navigation.navigate('Home');
    }
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={color.maintheme} />
        <View style={commonStyle.main_container}>
          <View style={styles.circle} />
          <View style={styles.header_wrap}>
            <Text style={commonStyle.title_text}>Welcome {'\n'}Back</Text>
          </View>
          <View style={styles.bottom_wrap}>
            <View style={styles.forgot}>
              <Text style={styles.login_txt}>Login</Text>
              <View style={styles.txtipt_wrap}>
                <View style={styles.flex}>
                  <Ionicons
                    color={color.border}
                    name={'mail-outline'}
                    size={20}
                  />
                  <Text style={styles.label_txt}>Email</Text>
                </View>
                <TextInput
                  value={email}
                  onChangeText={txt => {
                    setEmail(txt), setEmailError('');
                  }}
                  placeholder="yourmail@gmail.com"
                  placeholderTextColor={color.grayText}
                  style={styles.input_txt}
                />
                {emailError ? (
                  <Text style={styles.errorText}>{emailError}</Text>
                ) : null}
              </View>
              <View style={styles.txtipt_wrap}>
                <View style={styles.flex}>
                  <MaterialIcons
                    color={color.border}
                    name={'lock-outline'}
                    size={20}
                  />
                  <Text style={styles.label_txt}>Password</Text>
                </View>
                <View style={[styles.flex, {justifyContent: 'space-between'}]}>
                  <TextInput
                    value={password}
                    onChangeText={txt => {
                      setPassword(txt), setPasswordError('');
                    }}
                    placeholder="enter password"
                    placeholderTextColor={color.grayText}
                    style={[styles.input_txt, styles.extra]}
                    secureTextEntry={show ? true : false}
                  />
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Text style={[styles.show_text, {right: 35}]}>
                      {show ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {passwordError ? (
                  <Text style={styles.errorText}>{passwordError}</Text>
                ) : null}
              </View>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Why you forgot, now you have lost you acc.')
                }>
                <Text style={styles.show_text}>Forgot passcode?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn_wrap}>
              <Button
                onPress={() => handleLogin()}
                btn_txt={'Login'}
                bg={{backgroundColor: color.maintheme}}
                txt={{color: color.white}}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
                <Text style={[styles.show_text, {textAlign: 'center'}]}>
                  Create account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
