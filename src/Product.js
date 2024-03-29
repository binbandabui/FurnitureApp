import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Appcontext} from './Appcontext';
import AxiosInstancemork from './app/helpers/AxiosInstancemork';
const Product = props => {
  const {id} = useContext(Appcontext);
  const [detail, setDetail] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await AxiosInstancemork().get(`/produce/${id}`);
      setDetail(response);
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi');
    }
  };
  const gotoback = () => {
    navigation.navigate('Home');
  };
  const added = () => {
    ToastAndroid.show('Added to cart!', ToastAndroid.SHORT);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/*head */}
      <View style={mystyle.head}>
        {detail.image ? (
          <Image source={{uri: detail.image}} style={mystyle.anhspp} />
        ) : (
          <Text style={mystyle.load}>Loading...</Text>
        )}
        <View style={mystyle.selectcolor}>
          <View style={mystyle.biggroup}>
            <TouchableOpacity style={[mystyle.gr]}>
              <Image
                source={require('../asset/img/Group_16.png')}
                style={mystyle.imggr}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={mystyle.gr}>
              <Image
                source={require('../asset/img/Group_17.png')}
                style={mystyle.imggr}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={mystyle.gr}>
              <Image
                source={require('../asset/img/Group_18.png')}
                style={mystyle.imggr}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={mystyle.back} onPress={gotoback}>
          <Image
            source={require('../asset/img/Frame_14.png')}
            style={mystyle.farmeimg}></Image>
        </TouchableOpacity>
        <View style={mystyle.slot}>
          <View style={mystyle.slot2}>
            <TouchableOpacity style={mystyle.itemslotselect}></TouchableOpacity>
            <TouchableOpacity style={mystyle.itemslot}></TouchableOpacity>
            <TouchableOpacity style={mystyle.itemslot}></TouchableOpacity>
          </View>
        </View>
      </View>
      {/*content */}
      <View>
        <Text style={mystyle.namesp}>{detail.name}</Text>
        <View style={mystyle.giasl}>
          <Text style={mystyle.gia}>$ {detail.price}</Text>
          <View style={mystyle.sl}>
            <TouchableOpacity style={mystyle.buttonsl}>
              <Image
                source={require('../asset/img/Group_15.png')}
                style={{flex: 1, resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
            <Text style={[mystyle.txtsl]}>{detail.count}</Text>
            <TouchableOpacity style={mystyle.buttonsl}>
              <Image
                source={require('../asset/img/Group_23.png')}
                style={{flex: 1, resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{height: '17%'}}>
          <View style={mystyle.star}>
            <Image
              source={require('../asset/img/star_1.png')}
              style={mystyle.imgstar}></Image>
            <Text style={mystyle.txtstar}>{detail.rate}</Text>
            <Text style={mystyle.txtstar2}>({detail.vote} reviews)</Text>
          </View>
          <Text style={mystyle.txtcontent}>{detail.content}</Text>
        </ScrollView>
      </View>
      {/*add */}
      <View style={mystyle.add}>
        <TouchableOpacity style={mystyle.addfav}>
          <Image
            source={require('../asset/img/Frame_61.png')}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={mystyle.addcard} onPress={added}>
          <Text style={mystyle.txtaddcard}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
const mystyle = StyleSheet.create({
  head: {
    flexShrink: 1,
    height: '55%',
  },
  load: {
    marginTop: '2%',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
  },

  back: {
    width: 40,
    height: 40,
    marginLeft: 32,
    marginTop: 53,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  farmeimg: {
    width: '50%',
    height: '50%',
  },
  anhspp: {
    width: '87%',
    height: 455,
    alignSelf: 'flex-end',
    borderRadius: 0,
    borderBottomLeftRadius: 50,
    backgroundColor: '#F0F0F0',
  },
  slot: {
    position: 'absolute',
    zIndex: 1,
    minWidth: '50%',
    height: '2%',
    alignSelf: 'flex-end',
    top: '92%',
  },
  slot2: {
    flex: 1,
    flexDirection: 'row',
  },
  itemslot: {
    width: 30,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  itemslotselect: {
    width: 50,
    height: 6,
    backgroundColor: '#303030',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  selectcolor: {
    backgroundColor: 'white',
    width: 64,
    height: 192,
    marginLeft: 22,
    position: 'absolute',
    zIndex: 1,
    borderRadius: 40,
    marginTop: 149,
  },
  biggroup: {
    width: 34,
    height: 162,
    margin: 15,
  },
  gr: {
    width: 32,
    height: 32,
    marginBottom: 32,
  },
  imggr: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  grselect: {
    position: 'absolute',
    zIndex: 1,
    flex: 1,
    margin: '5%',
    marginLeft: '50%',
    resizeMode: 'contain',
  },
  namesp: {
    color: '#303030',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 25,
    fontFamily: 'Gelasio-Medium',
  },
  giasl: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gia: {
    color: '#303030',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 20,
    fontFamily: 'NunitoSans_7pt_Condensed-Medium',
  },
  sl: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    height: '70%',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsl: {
    width: '25%',
    flexGrow: 1,
  },
  txtsl: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: 0.9,
    alignItems: 'center',
    color: '#242424',
    fontFamily: 'NunitoSans_7pt_Condensed-Medium',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  imgstar: {
    width: 20,
    height: 20,
    marginLeft: 25,
  },
  txtstar: {
    color: '#303030',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  txtstar2: {
    color: '#808080',
    fontSize: 15,
    fontStyle: 'normal',
    marginLeft: 20,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  txtcontent: {
    minHeight: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 11,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'justify',
    lineHeight: 24,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  add: {
    width: '90%',
    height: '10%',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addfav: {
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  addcard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 60,
    backgroundColor: '#242424',
    borderRadius: 8,
    elevation: 5,
  },
  txtaddcard: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
});
