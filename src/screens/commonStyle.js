import {Dimensions, StyleSheet} from 'react-native';
import color from '../utils/color';
import fontFamily from '../utils/fontFamily';
const {height} = Dimensions.get('window');
export default Commonstyles = StyleSheet.create({
  main_container: {
    height:height,
    backgroundColor: color.maintheme,
  },
  title_text: {
    color: color.white,
    fontSize: height / 15,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  shadow:{
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
