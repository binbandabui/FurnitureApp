import React, { useState } from "react";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
const Favor = (props) => {


    const [data, setData] = useState(Data);
    const renderItem = ({ item }) => {
        const { id, name, price } = item;
        return (
            <View style={styles.adapter}>
                <View style={(styles.imgcontain)}>
                    <Image
                        style={(styles.image)}
                        source={require('../asset/img/pic.png')}></Image>
                </View>
                <View style={styles.textlabel}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>

                <View style={styles.btnlabel}>
                    <Image style={(styles.btnDel)}
                        source={require('../asset/img/Del.png')}></Image>
                    <Image style={(styles.Bag)}
                        source={require('../asset/img/bag.png')}></Image>
                </View>

            </View>
        )
    }
    return (
        <View
            style={styles.container}
        >
            <View style={styles.head}>

                <Image style={(styles.searI)}
                    source={require('../asset/img/Search.png')}></Image>
                <Text style={(styles.searT)}>Favorites</Text>
                <Image style={(styles.searC)}
                    source={require('../asset/img/Cart.png')}></Image>

            </View>
            <FlatList

                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.AddtoCon}>
                <Text style={styles.AddtoConText}>Add all to my cart</Text>

            </TouchableOpacity>

            <View style={styles.containertb1}>
                <TouchableOpacity  >
                    <Image style={(styles.tbicon)}
                        source={require('../asset/img/home-tb.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={(styles.tbicon)}
                        source={require('../asset/img/fav_tb.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={(styles.tbicon)}
                        source={require('../asset/img/bell_tb.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={(styles.tbicon)}
                        source={require('../asset/img/profile_tb.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default Favor
const styles = StyleSheet.create({
    head: {
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searT: {
        marginTop: 20,
        marginBottom: 15,
        color: 'black',
        fontSize: 30,
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: '500'
    },
    searI: {
        marginTop: 20,
        marginLeft: 10,
        height: 30,
        width: 30,
    },
    searC: {
        marginTop: 20,
        marginRight: 10,
        height: 30,
        width: 30,
    },

    containertb1: {
        width: 375,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        height: 55,

    },

    tbicon: {
        width: 24,
        height: 24,
    },



    AddtoCon: {
        height: 50,
        width: 375,
        backgroundColor: '#242424',
        shadowColor: '0 10 20 0',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8,

    },
    AddtoConText: {
        fontFamily: 'Nunito Sans',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 12,
        marginLeft: 94,
        marginRight: 94,
        color: '#fff'
    },
    btnlabel: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 328,

    },
    btnDel: {

        width: 24,
        height: 24,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 40,
    },
    btnBag: {

        width: 24,
        height: 24,
        borderRadius: 15,

    },
    textlabel: {
        flexDirection: 'column',
        marginLeft: 20,
        alignItems: 'flex-start',
        marginRight: 150,

    },
    imgcontain: {

        alignItems: 'center',
        marginLeft: 20,
    },
    image: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 15,

    },
    container: {
        width: '100%', height: '100%', backgroundColor: 'white',
    },
    name: {
        marginTop: 10,
        color: '#606060', fontSize: 14, fontWeight: '500', fontStyle: 'normal', fontFamily: 'Nunito Sans'

    },
    price: {

        marginTop: 5, color: 'black', fontSize: 16, fontWeight: '700', fontStyle: 'normal', fontFamily: 'Nunito Sans'

    },
    adapter: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'space-between',
    }
})

var Data = [
    { id: 1, name: 'Coffee Table', price: '$ 20.00' },
    { id: 2, name: 'Coffee Chair', price: ' $ 50.00' },
    { id: 3, name: 'Minimal Stand', price: ' $ 40.00' },
    { id: 4, name: 'Minimal Desk', price: ' $ 70.00' },
    { id: 5, name: 'Minimal Lamb', price: ' $ 40.00' },

]