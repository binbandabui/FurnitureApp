import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
const farme = require('../asset/img/Frame_14.png');
const anhsp = require('../asset/img/2681826.png');
const gr16 = require('../asset/img/Group_16.png');
const gr17 = require('../asset/img/Group_17.png');
const gr18 = require('../asset/img/Group_18.png');
const gr15 = require('../asset/img/Group_15.png');
const gr23 = require('../asset/img/Group_23.png');
const star = require('../asset/img/star_1.png');
const fav = require('../asset/img/Frame_61.png');
const gr16_1 = require('../asset/img/Group_16_1.png');
const grselect = require('../asset/img/Group_select.png');
const Product = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSlotPress = index => {
    setSelectedIndex(index);
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/*head */}
      <View style={mystyle.head}>
        <Image source={anhsp} style={mystyle.anhspp}></Image>
        <View style={mystyle.selectcolor}>
          <View style={mystyle.biggroup}>
            {/* <Image style={mystyle.grselect} source={grselect} />*/}
            <TouchableOpacity style={[mystyle.gr]}>
              <Image
                source={gr16}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={mystyle.gr}>
              <Image
                source={gr17}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={mystyle.gr}>
              <Image
                source={gr18}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={mystyle.back}>
          <Image source={farme} style={mystyle.farmeimg}></Image>
        </TouchableOpacity>
        <View style={mystyle.slot}>
          <View style={mystyle.slot2}>
            {[...Array(3).keys()].map(index => (
              <TouchableOpacity
                key={index}
                style={
                  selectedIndex === index
                    ? mystyle.itemslotselect
                    : mystyle.itemslot
                }
                onPress={() => handleSlotPress(index)}></TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      {/*content */}
      <View>
        <Text style={mystyle.namesp}>Minimal Stand</Text>
        <View style={mystyle.giasl}>
          <Text style={mystyle.gia}>$50</Text>
          <View style={mystyle.sl}>
            <TouchableOpacity style={mystyle.buttonsl}>
              <Image
                source={gr15}
                style={{width: '100%', height: '100%'}}></Image>
            </TouchableOpacity>
            <Text style={[mystyle.txtsl]}> 01</Text>
            <TouchableOpacity style={mystyle.buttonsl}>
              <Image
                source={gr23}
                style={{width: '100%', height: '100%'}}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{height: '17%'}}>
          <View style={mystyle.star}>
            <Image
              source={star}
              style={{
                width: '10%',
                height: '90%',
                marginLeft: '5%',
                resizeMode: 'contain',
              }}></Image>
            <Text style={mystyle.txtstar}>4.5</Text>
            <Text style={mystyle.txtstar2}>(50 reviews)</Text>
          </View>

          <Text style={mystyle.txtcontent}>
            Minimal Stand is made of by natural wood. The design that is very
            simple and minimal. This is truly one of the best furnitures in any
            family for now. With 3 different colors, you can easily select the
            best match for your home.
          </Text>
        </ScrollView>
      </View>
      {/*ađ */}
      <View style={mystyle.add}>
        <TouchableOpacity style={mystyle.addfav}>
          <Image source={fav} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity style={mystyle.addcard}>
          <Text style={mystyle.txtaddcard}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
const mystyle = StyleSheet.create({
  head: {
    with: '100%',
    height: '55%',
  },
  back: {
    width: '6%',
    height: '3%',
    marginLeft: '8%',
    marginTop: '10%',
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
    width: '85%',
    height: '100%',
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
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  itemslot: {
    width: 40,
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
    width: '14%',
    height: '55%',
    marginLeft: '6%',
    position: 'absolute',
    zIndex: 2,
    borderRadius: 40,
    top: '25%',
  },
  biggroup: {
    width: '100%',
    height: '80%',
    marginBottom: 'auto',
    marginTop: 'auto',
    alignSelf: 'center',
  },
  gr: {
    width: '55%',
    height: '20%',
    margin: '5%',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  grselect: {
    position: 'absolute',
    zIndex: 1,
    width: '43%',
    height: '20%',
    margin: '5%',
    marginTop: '13%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  grselect2: {
    position: 'absolute',
    zIndex: 1,
    width: '43%',
    height: '20%',
    margin: '5%',
    marginTop: '13%',
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{translateY: 30}],
  },
  namesp: {
    color: '#303030',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft: '5%',
    marginTop: '5%',
    fontFamily: 'Gelasio-Medium',
  },
  giasl: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gia: {
    color: '#303030',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: '5%',
    fontFamily: 'NunitoSans_7pt_Condensed-Medium',
  },
  sl: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    height: '70%',
    marginRight: '5%',
    justifyContent: 'flex-end',
  },
  buttonsl: {
    width: '25%',
    height: '100%',
  },
  txtsl: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: 0.9,
    paddingRight: 20,
    paddingLeft: 15,
    color: '#242424',
    fontFamily: 'NunitoSans_7pt_Condensed-Medium',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    marginTop: 10,
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
    marginTop: 14,
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
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addfav: {
    width: 60,
    height: 60,
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
