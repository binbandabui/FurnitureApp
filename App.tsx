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
import Product from './src/Product';

function App(): React.JSX.Element {
  return (
        <View>
          <Product/>
        </View>

  );
}


export default App;
