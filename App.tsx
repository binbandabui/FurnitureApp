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


function App(): React.JSX.Element {
  return (
        <View>
            <Login/>
            <Text>Lehung</Text>
        </View>

  );
}


export default App;
