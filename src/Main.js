import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Favor from './Favorite';
const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favor" component={Favor} />
      </Stack.Navigator>
      <NavigationButtons />
    </NavigationContainer>
  );
};
const NavigationButtons = () => {
  const [buttonhomePressed, setButtonHomePressed] = useState(true);
  const [buttonfavPressed, setButtonFavPressed] = useState(false);

  const navigation = useNavigation();

  //fav
  const navigateToFav = () => {
    setButtonHomePressed(false);
    console.log(setButtonFavPressed);
    navigation.navigate('Favor', {
      onSuccess: setButtonFavPressed(!buttonfavPressed),
    });
  };
  //home
  const navigateToHome = () => {
    setButtonFavPressed(false);
    navigation.navigate('Home', {
      onSuccess: setButtonHomePressed(!buttonhomePressed),
    });
  };
  return (
    <View style={mystyle.navigation}>
      <TouchableOpacity onPress={navigateToHome}>
        <Image
          source={
            buttonhomePressed
              ? require('../asset/img/imgnav/home_1.png')
              : require('../asset/img/imgnav/home.png')
          }
          style={mystyle.imgnav}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToFav}>
        <Image
          source={
            buttonfavPressed
              ? require('../asset/img/imgnav/fav_1.png')
              : require('../asset/img/imgnav/fav.png')
          }
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
  );
};
export default Main;
const mystyle = StyleSheet.create({
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
  imgnav: {width: 25, height: 25},
});
