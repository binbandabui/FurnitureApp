import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import {Appcontext} from './Appcontext';
import Login from './Login';
import Stacknavlogin from './Stacknavlogin';
const AppNavigation = () => {
  const {islogin} = useContext(Appcontext);
  return (
    <NavigationContainer>
      {islogin ? <Main /> : <Stacknavlogin />}
    </NavigationContainer>
  );
};

export default AppNavigation;
