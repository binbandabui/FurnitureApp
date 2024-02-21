import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Appcontext} from './Appcontext';
import MyOrder from './MyOrder';

const Login = props => {
  const {navigation} = props;
  const reg = () => {
    navigation.navigate('Reg');
  };
  const {setIsLogin} = useContext(Appcontext);
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleOnSumit = () => {
    if (!Name || (Name.length < 1 && !password) || password.length < 1) {
      Alert.alert('Information cannot be left blank!');
      return;
    } else {
      setIsLogin(true);
    }
    return;
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.rectangle}
          source={require('../asset/img/rectangle.png')}
        />
        <View>
          <Image
            style={styles.logoac}
            source={require('../asset/img/gr.png')}
          />
        </View>

        <Image
          style={styles.rectangri}
          source={require('../asset/img/rectangle.png')}
        />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.hello}>Hello!</Text>
        <Text style={styles.welcomeback}>WELCOME BACK</Text>
      </View>
      <View style={styles.styleinput}>
        <Text style={styles.txtemail}>Email</Text>
        <View style={styles.TextInput}>
          <TextInput style={styles.text} onChange={text => setName(text)} />
        </View>
        <Text style={[styles.txtemail, {marginTop: 45}]}>Password</Text>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.text}
            secureTextEntry={true}
            onChange={text => setPassword(text)}
          />
          <Image
            style={styles.iconeye}
            source={require('../asset/img/eye2.png')}
          />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity>
            <Text style={styles.textfg}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity
            style={[styles.button, {marginRight: 17}]}
            onPress={handleOnSumit}>
            <Text style={[styles.textlg]}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity onPress={reg}>
            <Text style={styles.textSU}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  txtemail: {
    fontFamily: 'NunitoSans12pt-Regular',
    marginLeft: 10,
    color: '#909090',
  },
  styleinput: {
    backgroundColor: '#FFFFFF',
    width: '92%',
    height: '56%',
    elevation: 8,
    paddingLeft: 17,
    paddingTop: 17,
    paddingBottom: 17,
    marginTop: '5%',
  },
  textSU: {
    color: '#303030',
    alignSelf: 'center',
    fontSize: 18,
    marginRight: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'NunitoSans12pt-SemiBold',
  },
  textlg: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
  },
  button: {
    borderRadius: 8,
    width: '90%',
    height: 50,
    backgroundColor: '#242424',
    flexShrink: 0,
    alignSelf: 'center',
  },
  textfg: {
    color: '#303030',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    marginRight: 17,
    fontFamily: 'NunitoSans12pt-SemiBold',
  },
  forgot: {
    width: '90%',

    alignSelf: 'center',
    marginTop: 35,
  },
  iconeye: {
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor: '#fff',
  },
  text: {
    width: '100%',
    height: 48,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 17,
  },
  TextInput: {
    marginTop: 5,
    width: '100%',
  },
  welcomeback: {
    color: '#303030',
    fontSize: 24,
    lineHeight: 45,
    letterSpacing: 1.2,
    fontWeight: '700',
    fontFamily: 'Merriweather-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
  },
  hello: {
    color: '#909090',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 45,
    fontFamily: 'Merriweather-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
  },
  welcome: {
    left: 30,
    marginTop: 30,
    width: 216,
    height: 93,
  },
  rectangri: {
    top: 53,
    right: 35,
  },
  rectangle: {
    top: 53,
    left: 30,
  },
  logoac: {
    marginTop: 22,
    resizeMode: 'contain',
    width: 74,
    height: 74,
    flexShrink: 0,
  },
  row: {
    justifyContent: 'space-between',

    flexDirection: 'row',
    marginTop: 22,
  },
  container: {
    width: '100%',
    height: '100%',

    backgroundColor: '#FFF',
  },
});
