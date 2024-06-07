import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import color from '../../utils/color';
import imagePath from '../../utils/imagePath';
import Button from '../../components/Button';
import commonStyle from '../commonStyle';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.main_container}>
          <StatusBar backgroundColor={color.maintheme} />
          <View style={styles.header_wrap}>
            <Text style={commonStyle.title_text}>Find your {'\n'}Gadget</Text>
          </View>
          <Image source={imagePath.splash} style={styles.img} />
          <Button
            onPress={() => navigation.navigate('Login')}
            btn_txt={'Get started'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header_wrap: {
    width: '100%',
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  img: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
});
