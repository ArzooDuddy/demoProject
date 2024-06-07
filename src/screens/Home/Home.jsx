import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import color from '../../utils/color';
import commonStyle from '../commonStyle';
import imagePath from '../../utils/imagePath';
import fontFamily from '../../utils/fontFamily';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    const url = 'https://fakestoreapi.com/products';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data???', data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error ::', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const filteredProducts = products.filter(
    product =>
      product?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product?.category?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <SafeAreaView style={styles.main_container}>
      <StatusBar backgroundColor={color.maintheme} />
      <View style={styles.main_wrap}>
        <View style={styles.header_wrap}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={imagePath.menu} style={styles.img} />
          </TouchableOpacity>
          <View style={styles.search_wrap}>
            <Image
              source={imagePath.search}
              style={[styles.img, styles.margin]}
            />
            <TextInput
              style={styles.search}
              placeholder="Search"
              onChangeText={text => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>
        </View>
        <Text style={[styles.title_text]}>
          Order online{'\n'}collect in store
        </Text>
        {loading ? (
          <View style={{top: height * 0.3}}>
            <ActivityIndicator color={color.maintheme} size={'large'} />
          </View>
        ) : (
          <View style={styles.list_main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredProducts?.map((item, index) => {
                return (
                  <View style={[styles.list_wrap, commonStyle.shadow]}>
                    <Image source={{uri: item?.image}} style={styles.pdt_img} />
                    <Text style={styles.title_txt}>
                      {item?.category.charAt(0).toUpperCase() +
                        item?.category.slice(1)}
                    </Text>
                    <Text style={styles.des_txt}>
                      {item?.title.charAt(0).toUpperCase() +
                        item?.title.slice(1)}
                    </Text>
                    <Text style={styles.price_txt}>${item?.price}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: color.lightbg,
    flex: 1,
  },
  title_text: {
    color: color.black,
    fontSize: height / 18,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  main_wrap: {
    width: '80%',
    alignSelf: 'center',
    flex: 1,
  },
  img: {
    height: 20,
    width: 20,
  },
  header_wrap: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 30,
  },
  margin: {
    marginLeft: 15,
  },
  search: {
    color: color.grayText,
    fontSize: height / 50,
    fontFamily: fontFamily.medium,
    width: '80%',
  },
  pdt_img: {
    height: 70,
    width: 70,
    marginVertical: 20,
  },
  list_wrap: {
    backgroundColor: color.white,
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  list_main: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    flex: 1,
    flexGrow: 1,
    marginBottom: 25,
  },
  title_txt: {
    color: color.black,
    fontSize: height / 40,
    fontFamily: fontFamily.bold,
    marginBottom: 10,
  },
  des_txt: {
    color: color.grayText,
    fontSize: height / 60,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  price_txt: {
    color: color.maintheme,
    marginBottom: 40,
    fontFamily: fontFamily.bold,
    fontSize: height / 40,
  },
});
