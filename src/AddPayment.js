import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
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
        style={mystyle.card}
        source={require('../asset/img/Payment_cardx.png')}
      />
      <View style={mystyle.cardhol}>
        <Text style={mystyle.txtcardhol1}>CardHolder Name</Text>
        <Text style={mystyle.txtcardhol2}>Ex: Bruno Pham</Text>
      </View>

      <View style={mystyle.carnum}>
        <Text style={mystyle.txtcardhol1}>CardHolder Number</Text>
        <TextInput style={mystyle.txtcarnum} />
      </View>
      <View style={mystyle.cvvdate}>
        <View style={mystyle.cvv}>
          <Text style={mystyle.txtcardhol1}>CVV</Text>
          <Text style={mystyle.txtcardhol2}>Ex: 123</Text>
        </View>
        <View style={mystyle.date}>
          <Text style={mystyle.txtcardhol1}>Expiration Date</Text>
          <TextInput style={mystyle.txtcarnum}>03/22</TextInput>
        </View>
      </View>
      <TouchableOpacity style={mystyle.btnadd}>
        <Text style={mystyle.txtbtn}>ADD NEW CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPayment;
const mystyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtbtn: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  btnadd: {
    marginLeft: '5%',
    marginTop: '40%',
    width: '89%',
    height: 60,
    backgroundColor: '#242424',
    borderRadius: 8,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    width: 157,
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  cvv: {
    width: 157,
    height: '100%',
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  cvvdate: {
    width: '88%',
    marginLeft: '5%',
    marginTop: 20,
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtcarnum: {
    width: '90%',
    height: '80%',
    color: 'black',
    paddingTop: 5,
    fontWeight: '600',
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  carnum: {
    width: '88%',
    height: 66,
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    padding: 10,
    marginTop: 20,
  },
  txtcardhol1: {
    color: '#808080',
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
  },
  txtcardhol2: {
    marginTop: 7,
    color: '#B3B3B3',
    fontSize: 16,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  cardhol: {
    width: '88%',
    height: 66,
    marginTop: 44,
    marginLeft: '5%',
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    padding: 10,
  },
  card: {width: '88%', height: '22%', alignSelf: 'center', marginTop: '22%'},
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
    marginLeft: '28%',
    marginRight: '28%',
  },
});
