import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ManKhoiDau = () => {
    return (
        <ImageBackground
            source={require('../asset/img/background.png')}
            style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.text1}>MAKE YOUR</Text>
                <Text style={styles.text2}>HOME BEAUTIFUL</Text>

                <Text style={styles.text3}>The best simple place where you discover most wonderful furnitures and make your home beautiful</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLabel}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ManKhoiDau

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '100%',

    },
    text1: {
        fontSize: 24,
        fontWeight: '400',
        color: 'gray',
        marginLeft: 20,
        fontStyle: 'italic'
    },
    text2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#303030',
        marginLeft: 20,
        fontStyle: 'italic'
    },
    text3: {
        fontSize: 18,
        textAlign: 'center',
        margin: 40
    },
    view1: {
        marginTop: '50%'
    },
    button: {
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: '#242424',
        height: 50,
        borderRadius: 3,
        margin: 10,
        width: 160
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50
    }

})