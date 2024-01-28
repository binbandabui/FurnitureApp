import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
const Payment = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  const handlePress1 = () => {
    setChecked1(!checked1);
    setChecked2(false);
  };

  const handlePress2 = () => {
    setChecked1(false);
    setChecked2(!checked2);
  };
  const checkboxImage1 = checked1
    ? require('../asset/img/checkbox_on.png')
    : require('../asset/img/checkbox_off.png');

  const checkboxImage2 = checked2
    ? require('../asset/img/checkbox_on.png')
    : require('../asset/img/checkbox_off.png');

  const opacity1 = checked1 ? 1 : 0.2;
  const opacity2 = checked2 ? 1 : 0.2;
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <TouchableOpacity>
          <Image
            style={{width: 20, height: 20}}
            source={require('../asset/img/Frame_14.png')}
          />
        </TouchableOpacity>
        <Text style={mystyle.txthead}>Payment method</Text>
      </View>
      <View style={mystyle.cardnonsel}>
        <TouchableOpacity onPress={handlePress1} activeOpacity={0.5}>
          <Image
            style={[mystyle.card, {opacity: opacity1}]}
            source={require('../asset/img/Payment_card.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={mystyle.check}>
        <TouchableOpacity onPress={handlePress1}>
          <Image style={mystyle.imgcheck} source={checkboxImage1} />
        </TouchableOpacity>
        <Text style={mystyle.txtcheck}>Use as default payment method</Text>
      </View>

      <View style={mystyle.cardnonsel}>
        <TouchableOpacity onPress={handlePress2} activeOpacity={0.5}>
          <Image
            style={[mystyle.card, {opacity: opacity2}]}
            source={require('../asset/img/Payment_card.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={mystyle.check}>
        <TouchableOpacity onPress={handlePress2}>
          <Image style={mystyle.imgcheck} source={checkboxImage2} />
        </TouchableOpacity>
        <Text style={mystyle.txtcheck}>Use as default payment method</Text>
      </View>
      <View style={mystyle.btnadd}>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 40,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            elevation: 1,
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 30, color: 'black'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;
const mystyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  btnadd: {
    position: 'absolute',
    left: '80%',
    right: '20%',
    bottom: '5%',
    zIndex: 1,
  },

  cardnonsel: {
    width: '90%',
    height: '22%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '5.5%',
    borderRadius: 10,

    overflow: 'hidden',
  },
  txtcheck: {
    marginLeft: '2%',
    color: '#222222',
    fontSize: 14,
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
  },
  imgcheck: {width: 20, height: 20},
  head: {
    marginLeft: '5%',
    marginTop: '5%',
    flexShrink: 1,
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txthead: {
    color: '#303030',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: '28%',
    marginRight: '28%',
  },
  card: {
    maxWidth: '113%',
    maxHeight: '100%',
  },

  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '5%',
  },
});
