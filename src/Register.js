import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.rectangle}
                    source={require('../asset/img/rectangle.png')} />
                <View>
                    <Image style={styles.logoac}
                        source={require('../asset/img/logoac.png')} />
                </View>

                <Image style={styles.rectangri}
                    source={require('../asset/img/rectangle.png')} />
            </View>
            <View style={styles.welcome}>
                <Text style={styles.welcomeback}>WELCOME</Text>
            </View>
            <View style={styles.containerte}>
            <View  style={styles.TextInput}>
            <TextInput style={styles.text} placeholder='  Name' />
                <TextInput style={[styles.text,styles.textmail]} placeholder='  Email' />
            </View>
            <View style={styles.TextInput}>
                <TextInput style={styles.text} placeholder=' Password' secureTextEntry={true} />
                <Image style={styles.iconeye}
                    source={require('../asset/img/eye2.png')} />
            </View>
            <View style={styles.TextInput}>
                <TextInput style={styles.text} placeholder=' Confirm Passwword' secureTextEntry={true} />
                <Image style={styles.iconeye}
                    source={require('../asset/img/eye2.png')} />
            </View>
            </View>
           
            <View style={styles.forgot}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textlg}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity>
                    <Text style={styles.textSU1}>
                    Already have account?<Text style={styles.textSU}> SIGN UP</Text>
                    </Text>
                   
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Register

const styles = StyleSheet.create({
    textSU1:{
fontSize:17,
    },
    textmail:{
marginTop:15,
    },
    containerte:{
        marginTop:10,
    },
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
    marginTop:22,
    },
    button: {
        borderRadius: 8,
        width: '100%',
        height:70,
        backgroundColor: '#242424',
        flexShrink: 0,
    },
 
    forgot: {
        alignItems: 'center',
        marginTop: 55
    },
    iconeye: {
        position: 'absolute',
        top: 25,
        right: 20,
        backgroundColor: '#fff'
    },
    text: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#252a32',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 11,
        paddingHorizontal: 17,
    },
    TextInput: {
marginTop: 15,
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
    welcome: {
        left: 30,
        marginTop: 20,
        width: 216,
        height: 40,
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