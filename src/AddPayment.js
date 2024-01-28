import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const AddPayment = () => {
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
      <Image
        style={{width: '88,8%', height: '22%'}}
        source={require('../asset/img/Payment_cardx.png')}
      />
      <View style={mystyle.input}></View>
    </View>
  );
};

export default AddPayment;
const mystyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {

  },
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
});
