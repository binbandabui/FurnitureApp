import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Favor from './Favorite';
import Product from './Product';
import TinTuc from './TinTuc';
import Payment from './Payment';
import AddPayment from './AddPayment';
import ProfileScreen from './ProfileScreen';
import MyOrder from './MyOrder';
import ShipAddress from './ShipAddress';
import Checkout from './Checkout';
import Congrat from './Congrat';
import Cart from './Cart';
const Main = props => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="ShippingAddress" component={ShipAddress} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Congrat" component={Congrat} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  );
};
const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favor" component={Favor} />
      <Tab.Screen name="Noti" component={TinTuc} />
      <Tab.Screen name="Acc" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const tabScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    style: { height: 60 },
    tabBarStyle: { height: '8%' },
    tabBarIcon: ({ focused }) => {
      if (route.name == 'Home') {
        return (
          <Image
            source={
              focused
                ? require('../asset/img/imgnav/home_1.png')
                : require('../asset/img/imgnav/home.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name == 'Favor') {
        return (
          <Image
            source={
              focused
                ? require('../asset/img/imgnav/fav_1.png')
                : require('../asset/img/imgnav/fav.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name === 'Noti') {
        return (
          <Image
            source={
              focused
                ? require('../asset/img/imgnav/bell_1.png')
                : require('../asset/img/imgnav/bell.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name === 'Acc') {
        return (
          <Image
            source={
              focused
                ? require('../asset/img/imgnav/account_1.png')
                : require('../asset/img/imgnav/account.png')
            }
            style={mystyle.imgnav}
          />
        );
      }
    },
  };
};
export default Main;
const mystyle = StyleSheet.create({
  imgnav: { width: 25, height: 25 },
});
