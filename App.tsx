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
import Checkout from './src/Checkout';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
     <Main/>
    </SafeAreaView>
  );
}

export default App;
