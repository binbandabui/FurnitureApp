import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.rectangle}
                    source={require('../../assets/images/rectangle.png')} />
                <View>
                    <Image style={styles.logoac}
                        source={require('../../assets/images/logoac.png')} />
                </View>

                <Image style={styles.rectangri}
                    source={require('../../assets/images/rectangle.png')} />
            </View>
            <View style={styles.welcome}>
                <Text style={styles.hello}>Hello!</Text>
                <Text style={styles.welcomeback}>WELCOME BACK</Text>
            </View>
            <View style={styles.TextInput}>
                <TextInput style={styles.text} placeholder='  Email' />
            </View>
            <View style={styles.TextInput}>
                <TextInput style={styles.text} placeholder=' Password' secureTextEntry={true} />
                <Image style={styles.iconeye}
                    source={require('../../assets/images/eye2.png')} />
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity>
                    <Text style={styles.textfg}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textlg}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity>
                    <Text style={styles.textSU}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login

const styles = StyleSheet.create({
    textSU:{
        color:'#303030',
        textAlign:'center',
        fontSize:18,
        fontStyle:'normal',
        fontWeight:'600',

    },
    textlg:{
    textAlign:'center',
    color:'#fff',
    fontSize:18,
    fontWeight:'600',
    marginTop:12,
    },
    button: {
        borderRadius: 8,
        width: '100%',
        height: 50,
        backgroundColor: '#242424',
        flexShrink: 0,
    },
    textfg: {
        color: '#303030',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        fontStyle: 'normal',

    },
    forgot: {
        alignItems: 'center',
        marginTop: 35
    },
    iconeye: {
        position: 'absolute',
        top: 15,
        right: 20,
        backgroundColor: '#fff'
    },
    text: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#252a32',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 11,
        paddingHorizontal: 17,
    },
    TextInput: {
        marginTop: 25,
        width: '100%'
    },
    welcomeback: {
        color: '#303030',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 45,
        letterSpacing: 1.2,
    },
    hello: {
        color: '#909090',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 45,
    },
    welcome: {
        left: 30,
        marginTop: 30,
        width: 216,
        height: 93,
    },
    rectangri: {
        top: 53,
        right: 20,
    },
    rectangle: {
        top: 53,
        left: 20,
    },
    logoac: {
        overflow:'hidden',
        marginTop: 22,
        justifyContent: 'space-between',
        resizeMode: 'cover',
        borderWidth: 6,
        backgroundColor: "black",
        width: 64,
        height: 64,
        flexShrink: 0,
        borderRadius: 50,
    },
    row: {
        justifyContent: "space-between",

        flexDirection: 'row',
        marginTop: 22,
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 17

    },

})