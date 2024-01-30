import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

const ShipAddress = props => {
    const { navigation } = props;

    const goback = () => {
        navigation.goBack();
    };

    const [addresses, setAddresses] = useState([
        { id: '1', name: 'Bruno fernandes', info: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France', checked: true },
        { id: '2', name: 'Bruno fernandes', info: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France', checked: false },
        { id: '3', name: 'Bruno fernandes', info: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France', checked: false },
    ]);

    const handleCheckboxPress = (id) => {
        setAddresses(prevAddresses => {
            return prevAddresses.map(address => {
                if (address.id === id) {
                    address.checked = true;
                } else {
                    address.checked = false;
                }
                return address;
            });
        });
    };

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleCheckboxPress(item.id)}>
                <Image
                    style={styles.checkbox}
                    source={item.checked ? require('../asset/img/checkbox_on.png') : require('../asset/img/checkbox_off.png')}
                />
            </TouchableOpacity>
            <View style={styles.middleContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <TouchableOpacity >
                        <Image style={styles.nameImage} source={require('../asset/img/edit-2.png')} />
                    </TouchableOpacity>
                </View>
                <View style={mystyle.separator} />
                <Text style={styles.info}>{item.info}</Text>
            </View>
        </View>
    );
    return (
        <View style={mystyle.body}>
            <View style={mystyle.head}>
                <TouchableOpacity onPress={goback}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../asset/img/Frame_14.png')}
                    />
                </TouchableOpacity>
                <Text style={mystyle.txthead}>Address Information</Text>
            </View>
            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <View style={mystyle.btnadd}>
                <View
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 40,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        elevation: 1,
                        marginLeft: 330,
                        marginTop: 140,
                    }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 30, color: 'black' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ShipAddress;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    checkbox: {
        marginTop: 15,
        width: 20,
        height: 20,
        marginRight: 300,
        marginBottom: 5,
    },
    middleContainer: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 335,
        height: 127,

    },
    nameContainer: {
        marginRight: 150,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '700',
        color: "#242424",
        marginRight: 10,
    },
    nameImage: {
        marginTop: 5,
        width: 40,
        height: 30,
        marginLeft: 120,
    },
    info: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
        marginTop: 5,
    },
});

const mystyle = StyleSheet.create({
    separator: {
        height: 2,
        backgroundColor: '#ddd',
        marginTop: 10,
    },
    head: {
        marginRight: '5%',

        marginLeft: '5%',
        marginTop: '10%',
        flexShrink: 1,
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txthead: {
        color: '#303030',
        fontSize: 16,
        marginLeft: '28%',
        fontWeight: 'bold',
        marginRight: '28%',
        fontFamily: 'Merriweather-Bold',
    },

    // ... Other styles ...
});
