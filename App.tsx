import React from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Favor from './src/Favorite';
import Product from './src/Product';
import Home from './src/Home';
import Main from './src/Main';
import TinTuc from './src/TinTuc';
import ManKhoiDau from './src/ManKhoiDau';
import Payment from './src/Payment';
import AddPayment from './src/AddPayment';
import Cart from './src/Cart';
import Congrat from './src/Congrat';
import Login from './src/Login';
import Register from './src/Register';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
 <Register/>

    </SafeAreaView>
  );
}

export default App;
