import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Congrat = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.t}>Success!</Text>
            <View style={styles.imgcontainer}><Image source={require('../asset/img/suc.png')} /><Image style={{ marginTop: 20 }} source={require('../asset/img/tick.png')} /></View>
            <Text style={styles.context}>Your order will be delivery soon. Thank you for chosing our app</Text>
            <TouchableOpacity style={styles.btnCon}><Text style={{ color: 'white', textAlign: 'center' }}>aaa</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnCon1}><Text style={{ color: 'white', textAlign: 'center' }}>aaa</Text></TouchableOpacity>

        </View>
    )
}

export default Congrat

const styles = StyleSheet.create({
    btnCon: {
        marginTop: 40,
        width: 315,
        height: 60,
        backgroundColor: "#242424",
        borderRadius: 15,
    },
    btnCon1: {
        marginTop: 40,
        width: 315,
        height: 60,
        backgroundColor: "#242424",
        borderRadius: 15,

    },

    container: {
        flex: 1,
        alignItems: 'center',
    },
    context: {
        marginTop: 25,
        fontFamily: 'NunitoSans_7pt_Condensed',
        fontSize: 18,
        textAlign: 'center',
    },
    t: {
        marginTop: 80,
        fontFamily: 'Merriweather-Regular',
        fontSize: 36,
        color: '#303030',
    },
    imgcontainer: {
        marginTop: 30,
        alignItems: 'center',

    },
})