import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../utils/color';
import fontFamily from '../utils/fontFamily';
import commonStyle from '../screens/commonStyle';
const {width} = Dimensions.get('window');
const Button = ({onPress, btn_txt,bg,txt}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn,commonStyle.shadow,bg]}>
      <Text style={[styles.btn_txt,txt]}>{btn_txt}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.white,
    marginHorizontal: 40,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical:20,
  },
  btn_txt: {
    color: color.maintheme,
    fontSize: width * 0.05,
    fontFamily: fontFamily.medium,
    fontWeight: '700',
  },
});
