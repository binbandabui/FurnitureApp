import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [itemslot, itemSlot] = useState(iconmenu);
  const [spitem, spItem] = useState(sp);
  const [selectedindex, setselectedIndex] = useState(1);
  //menu
  const renderitem = ({item}) => {
    const {id, name, img} = item;
    return (
      <TouchableOpacity
        style={mystyle.flatiem}
        onPress={() => setselectedIndex(id)}>
        <View
          style={[
            mystyle.item,
            {
              backgroundColor: id === selectedindex ? '#303030' : '#F5F5F5',
            },
          ]}>
          <Image source={img} style={mystyle.imgitem} />
        </View>
        <Text style={mystyle.txtiem}>{name}</Text>
      </TouchableOpacity>
    );
  };
  //sp
  const renderspitem = ({item}) => {
    const {id, name, price, img} = item;
    return (
      <TouchableOpacity style={mystyle.itemsp}>
        <Image source={img} style={mystyle.imgitemsp} />
        <Text style={mystyle.txtnamesp}>{name}</Text>
        <Text style={mystyle.txtpricesp}>
          <Text>$ </Text>
          {price}
        </Text>
        <Image
          source={require('../asset/img/Frame_19.png')}
          style={mystyle.imgframe_19}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={mystyle.head}>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/ri_search_2line.png')}
            style={mystyle.imghead}
          />
        </TouchableOpacity>
        <View style={mystyle.txthead}>
          <Text style={mystyle.txt2head}>Make home</Text>
          <Text style={mystyle.txt3head}>BEAUTIFUL</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/bi_cart.png')}
            style={mystyle.imghead}
          />
        </TouchableOpacity>
      </View>
      <View style={mystyle.itemmenu}>
        <FlatList
          horizontal={true}
          data={itemslot}
          renderItem={renderitem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={mystyle.flatspitem}>
        <FlatList
          numColumns={2}
          data={spitem}
          renderItem={renderspitem}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          showsHorizontalScrollIndicator={false}
          style={mystyle.sp}
        />
      </View>
      <View style={mystyle.navigation}>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/imgnav/home.png')}
            style={mystyle.imgnav}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/imgnav/fav.png')}
            style={mystyle.imgnav}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/imgnav/bell.png')}
            style={mystyle.imgnav}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../asset/img/imgnav/account.png')}
            style={mystyle.imgnav}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const mystyle = StyleSheet.create({
  head: {
    flexShrink: 1,
    height: 55,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  imgnav: {width: 25, height: 25},
  navigation: {
    flexShrink: 1,
    height: '9%',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 42,
    paddingRight: 42,
    alignItems: 'center',
  },
  txtnamesp: {
    color: '#606060',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginTop: '4%',
  },
  txtpricesp: {
    color: '#303030',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
  },
  imgframe_19: {
    width: '19%',
    height: '12%',
    position: 'absolute',
    bottom: 65,
    right: 10,
  },
  imgitemsp: {width: 157, height: 200, borderRadius: 10},
  flatspitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsp: {
    margin: '5%',
    width: 157,
    height: 253,
  },
  sp: {
    flexWrap: 'wrap',
  },
  txtiem: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    color: '#999',
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Medium',
  },
  flatiem: {
    alignItems: 'center',
  },
  imgitem: {
    width: 28,
    height: 28,
  },
  item: {
    width: 44,
    height: 44,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemmenu: {
    flexShrink: 1,
    height: '10%',
    marginTop: '5%',
  },
  txt2head: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    color: '#909090',
    fontFamily: 'Gelasio-Medium',
  },
  txt3head: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    color: '#242424',
    fontFamily: 'Gelasio-Medium',
  },
  txthead: {
    alignItems: 'center',
  },
  imghead: {
    width: 24,
    height: 24,
  },
});

var sp = [
  {
    id: 1,
    name: 'Black Simple Lamp',
    price: '12.00',
    img: require('../asset/img/jonnycaspariwsvCC6UyKjsunsplash.png'),
  },
  {
    id: 2,
    name: 'Minimal Stand',
    price: '25.00',
    img: require('../asset/img/2681826.png'),
  },
  {
    id: 3,
    name: 'Coffee Chair',
    price: '20.00',
    img: require('../asset/img/sarahdorweilerfr0J5GIVygunsplash.png'),
  },
  {
    id: 4,
    name: 'Simple Desk',
    price: '20.00',
    img: require('../asset/img/3968901.png'),
  },
  {
    id: 5,
    name: 'Simple Desk',
    price: '200.00',
    img: require('../asset/img/3968901.png'),
  },
  {
    id: 6,
    name: 'Simple Desk',
    price: '22.00',
    img: require('../asset/img/3968901.png'),
  },
];

var iconmenu = [
  {
    id: 1,
    name: 'Popular',
    img: require('../asset/img/star.png'),
  },
  {
    id: 2,
    name: 'Chair',
    img: require('../asset/img/chair.png'),
  },
  {
    id: 3,
    name: 'Table',
    img: require('../asset/img/table.png'),
  },
  {
    id: 4,
    name: 'Armchair',
    img: require('../asset/img/sofa.png'),
  },
  {
    id: 5,
    name: 'Bed',
    img: require('../asset/img/bed.png'),
  },
  {
    id: 6,
    name: 'Lamp',
    img: require('../asset/img/lamp.png'),
  },
];
