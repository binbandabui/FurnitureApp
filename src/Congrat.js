import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Congrat = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.t}>Success!</Text>
            <View style={styles.imgcontainer}><Image source={require('../asset/img/suc.png')} /><Image style={{ marginTop: 20 }} source={require('../asset/img/tick.png')} /></View>
            <Text style={styles.context}>Your order will be delivery soon. Thank you for chosing our app</Text>
            <TouchableOpacity style={styles.btnCon}><Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 18 }}>Track your order</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnCon1}><Text style={{ color: 'black', textAlign: 'center', fontWeight: '600', fontSize: 18 }}>Back to home</Text></TouchableOpacity>

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
        justifyContent: 'center',    // Center the text vertically
        alignItems: 'center',

    },
    btnCon1: {
        marginTop: 40,
        width: 315,
        height: 60,
        backgroundColor: "white",   // Set the background color to white
        borderColor: "#242424",     // Set the border color to black
        borderWidth: 2,             // Set the border width
        borderRadius: 15,
        justifyContent: 'center',    // Center the text vertically
        alignItems: 'center',        // Center the text horizontally
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