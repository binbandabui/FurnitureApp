import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/layout/Login';
import Favor from './src/Favorite';
import ManKhoiDau from './Hsang/ManKhoiDau';
import TinTuc from './Hsang/TinTuc';


function App(): React.JSX.Element {
  return (
        <TinTuc/>

  );
}


export default App;
