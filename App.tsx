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
import Favor from './src/Favorite';
import Product from './src/Product';
import Home from './src/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <Home />
    </SafeAreaView>
  );
}

export default App;
