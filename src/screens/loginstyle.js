import { Dimensions, StyleSheet } from 'react-native'
import color from '../utils/color'
import fontFamily from '../utils/fontFamily'
const {height,width} = Dimensions.get('window')
export default styles = StyleSheet.create({
    header_wrap:{
        top:-50,
        width:'80%',
        alignSelf:'center'
    },
    circle:{
        width: 115,
        height: 115,
        borderRadius:90,
        top: -56,
        backgroundColor:color.circle,
        alignSelf:'flex-end', 
        right:40,
      },
      bottom_wrap:{
        backgroundColor:color.white,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        height:height
      },
      login_txt:{
        color:color.black,
        marginVertical:20,
        fontSize:height/40,
        fontFamily:fontFamily.medium,
      },
      txtipt_wrap:{
        marginVertical:20

      },
      flex:{
        flexDirection:'row',
        alignItems:'center'
      },
      label_txt:{
        marginHorizontal:10,
        fontFamily:fontFamily.medium,
        fontWeight:'600',
        color:color.grayText,
        fontSize:height/55
      },
      input_txt:{
        borderBottomWidth: 1,
         borderColor: color.border,
         color:color.black,
         fontSize:height/50,
         fontFamily:fontFamily.medium,
      },
      show_text:{
        fontSize:height/50,
        color:color.maintheme,
        fontFamily:fontFamily.bold,
        fontWeight:'600'
      },
      extra:{
        width:'100%'
      },
      forgot:{
        width:'80%',
        alignSelf:'center'
      },
      btn_wrap:{
        marginTop:40,
      },
      errorText:{
        color:color.error,
        fontFamily:fontFamily.regular,
        fontSize:height/65
      }
})