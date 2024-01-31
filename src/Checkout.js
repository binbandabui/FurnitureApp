import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Checkout = props => {
  const {navigation} = props;
  const goback = () => {
    navigation.goBack();
  };
  const goaddress = () => {
    navigation.navigate('ShippingAddress');
  };

  const gopaymemt = () => {
    navigation.navigate('Payment');
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <TouchableOpacity onPress={goback}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../asset/img/Frame_14.png')}
          />
        </TouchableOpacity>
        <Text style={mystyle.txthead}>Check out</Text>
      </View>
      <View style={mystyle.body2}>
        <View style={[mystyle.namebody2, {marginBottom: 10}]}>
          <Text style={mystyle.txt}>Shipping Address</Text>
          <TouchableOpacity onPress={goaddress}>
            <Image source={require('../asset/img/edit-2.png')}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.5} onPress={goaddress}>
          <Image
            style={mystyle.imgaddress}
            source={require('../asset/img/Group_55.png')}></Image>
        </TouchableOpacity>

        <View style={mystyle.namebody2}>
          <Text style={mystyle.txt}>Payment</Text>
          <TouchableOpacity onPress={gopaymemt}>
            <Image source={require('../asset/img/edit-2.png')}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={mystyle.item}
          activeOpacity={0.7}
          onPress={gopaymemt}>
          <Image
            style={{width: 32, height: 25}}
            source={require('../asset/img/mastercard.png')}
          />
          <Text style={mystyle.txtitem}>**** **** **** 3947</Text>
        </TouchableOpacity>

        <View style={mystyle.namebody2}>
          <Text style={mystyle.txt}>Delivery method</Text>
          <TouchableOpacity>
            <Image source={require('../asset/img/edit-2.png')}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={mystyle.item} activeOpacity={0.7}>
          <Image
            style={{width: 89, height: 20}}
            source={require('../asset/img/dhl.png')}
          />
          <Text style={mystyle.txtitem}>Fast (2-3days)</Text>
        </TouchableOpacity>

        <View style={mystyle.tobal}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <Text style={mystyle.txt2}>Order: </Text>
            <Text style={mystyle.txt3}>$ 95.00 </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <Text style={mystyle.txt2}>Delivery: </Text>
            <Text style={mystyle.txt3}>$ 95.00 </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <Text style={mystyle.txt2}>Total: </Text>
            <Text style={mystyle.txt3}>$ 95.00 </Text>
          </View>
        </View>

        <TouchableOpacity style={mystyle.btnadd} activeOpacity={0.5}>
          <Text style={mystyle.txtbtn}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
const mystyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  txtitem: {
    marginLeft: 17,
    color: '#242424',
    fontSize: 14,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
    fontWeight: 'bold',
    lineHeight: 21,
  },
  txt2: {
    color: '#808080',
    fontSize: 18,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  txt3: {
    color: '#242424',
    fontSize: 18,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  tobal: {
    width: 335,
    height: 135,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    marginTop: '8%',
    padding: 15,
    borderRadius: 8,
  },
  item: {
    width: 335,
    height: 68,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    borderRadius: 8,
  },
  imgaddress: {
    height: 128,
    width: '90%',
    alignSelf: 'center',
  },
  btnadd: {
    width: '89%',
    height: 60,
    backgroundColor: '#242424',
    borderRadius: 8,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  txtbtn: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  txt: {
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
    color: '#909090',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  namebody2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
  img: {
    height: '14%',
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 8,
  },
  imgimg: {
    maxWidth: '98%',
    maxHeight: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  img2: {width: '100%', height: 90, alignSelf: 'center'},
  img3: {width: '100%', height: '25%', alignSelf: 'center', marginTop: '5%'},
  head: {
    position: 'absolute',
    marginLeft: '5%',
    marginTop: '5%',
    flexShrink: 1,
    height: 44,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txthead: {
    color: '#303030',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: '35%',
    marginRight: '35%',
  },
  body2: {
    marginTop: '20%',
  },
});
