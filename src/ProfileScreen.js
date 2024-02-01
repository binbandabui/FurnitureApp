import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const ProfileScreen = props => {
  const {navigation} = props;
  const goMyOrder = () => {
    navigation.navigate('MyOrder');
  };
  const goShippingAddress = () => {
    navigation.navigate('ShippingAddress');
  };
  const Payment = () => {
    navigation.navigate('Payment');
  };
  const menu = [
    {id: '1', title: 'My order', info: 'Already have 10 orders'},
    {id: '2', title: 'Shipping Address', info: '03 Address'},
    {id: '3', title: 'Paymen Methob', info: 'You have 2 card'},
    {id: '4', title: 'My Revieww', info: 'Review for 5 item'},
    {id: '5', title: 'Setting', info: 'Notification'},

    // Add more items as needed
  ];
  const user = [
    {
      id: '1',
      name: 'Brono Pham',
      email: 'bruno102@gmail.com',
      avatar:
        'https://fastly.picsum.photos/id/795/200/200.jpg?hmac=frCAqjE9buwwg1NjgwTe6Ef_WWIJOl5h2c6-TFjnlA4',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        if (item.id === '1') {
          goMyOrder();
        } else if (item.id === '2') {
          goShippingAddress();
        } else if (item.id === '3') {
          Payment();
        }
      }}>
      <View style={styles.itemcontainer2}>
        <View style={styles.itemcontainer3}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.m1}>{item.title}</Text>
            <Text style={styles.m2}>{item.info}</Text>
          </View>
          <TouchableOpacity style={styles.bt}>
            <Image
              style={styles.img}
              source={require('../asset/img/Frame_15.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem2 = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        // Handle click on user item
      }}>
      <View style={styles.listItem}>
        <View style={styles.ava}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <View style={{fontSize: 18, marginLeft: 25, marginTop: 15}}>
            <Text style={{color: '#242424', fontSize: 20, fontWeight: '700'}}>
              {item.name}
            </Text>
            <Text style={{color: '#808080', fontSize: 14, fontWeight: '400'}}>
              {item.email}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containertab}>
      <View style={styles.head}>
        <TouchableOpacity>
          <Image
            style={{
              width: 30,
              height: 30,
              marginRight: 130,
            }}
            source={require('../asset/img/Search.png')}></Image>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontFamily: 'NuniTo Sans',
            fontWeight: '700',
            fontSize: 16,
          }}>
          Profile
        </Text>
        <TouchableOpacity>
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 130,
            }}
            source={require('../asset/img/Logout.png')}></Image>
        </TouchableOpacity>
      </View>

      <FlatList
        data={user}
        keyExtractor={item => item.id}
        renderItem={renderItem2}
      />
      <FlatList
        data={menu}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
  bt: {
    width: 50,
    height: 50,
    marginLeft: 330,
    marginTop: 25,
    position: 'absolute',
    marginBottom: 10,
  },
  itemcontainer2: {
    backgroundColor: 'white',
    width: 380,
    height: 70,
    borderRadius: 15,
    marginTop: 19,
  },
  itemcontainer3: {
    flexDirection: 'row',
  },
  m1: {
    marginTop: 10,
    fontSize: 20,
    color: '#242424',
    marginLeft: 30,
  },
  m2: {
    color: '#808080',
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 360,
  },
  ava: {
    marginTop: 60,
    marginLeft: 20,
    flexDirection: 'row',
  },
  separator: {
    height: 2,
    backgroundColor: '#ddd',
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
  },
  itemcontainer: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 15,
  },
  detail: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    position: 'absolute',
  },
  orderid: {
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'NuniTo Sans',
    fontStyle: 'bold',
    fontSize: 16,
    fontWeight: '600',
    fontWeight: 'bold',
  },
  date: {
    fontFamily: 'NuniTo Sans',
    marginLeft: 100,
    fontWeight: '400',
    marginTop: 20,

    fontSize: 14,
  },
  quan: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,

    fontFamily: 'NuniTo Sans',
    fontWeight: '700',
    fontSize: 16,
  },
  price: {
    fontFamily: 'NuniTo Sans',
    marginLeft: 115,
    marginTop: 20,
    marginRight: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  delivery: {
    color: 'green',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'NuniTo Sans',
    marginTop: 20,
    marginLeft: 200,
    marginBottom: 10,
  },
  listItem: {},
  l1: {
    flexDirection: 'row',
  },

  containertab: {
    flex: 1,
    padding: 20,
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#ddd',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
});
