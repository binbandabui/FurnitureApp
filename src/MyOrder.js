import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import ProfileScreen from './ProfileScreen';





const MyOrder = props => {
    const { navigation } = props;
    const gotoProfile = () => {
        navigation.navigate('Acc');
    };

    const data = [
        { id: '1', orderid: 'asjfuahfah', date: '12/15/2200', quantity: '3', totalamount: '230$', status: 'Delivered' },
        { id: '2', orderid: 'Casfafhaa', date: '12/15/2200', quantity: '3', totalamount: '240$', status: 'Delivered' },
        { id: '3', orderid: 'Bsfasffay', date: '12/15/2200', quantity: '3', totalamount: '120$', status: 'Delivered' },
        // Add more items as needed
    ];
    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={styles.itemcontainer}>
                <View style={styles.l1}><Text style={styles.orderid}>ID: {item.orderid}</Text>
                    <Text style={styles.date}>Date: {item.date}</Text></View><View style={styles.separator} />
                <View style={styles.l1}><Text style={styles.quan}>Quantity: {item.quantity}</Text>
                    <Text style={styles.price}>Totalamount: {item.totalamount}</Text></View>
                <View style={styles.l1}><TouchableOpacity style={styles.detail}><Text style={{ color: 'white', alignSelf: 'center', marginTop: 10, }}>Detail</Text></TouchableOpacity><Text style={styles.delivery}>{item.status}</Text></View>
            </View>

        </View>
    );

    const [activeTab, setActiveTab] = useState('tab1');
    const changeTab = (tabId) => {
        setActiveTab(tabId);
    };
    return (

        <View style={styles.containertab}>
            <View style={styles.head}><TouchableOpacity onPress={gotoProfile}><Image style={{ width: 30, height: 30 }} source={require('../asset/img/Frame_14.png')}></Image></TouchableOpacity><Text style={{ marginLeft: 110, fontFamily: 'NuniTo Sans', fontWeight: 'bold', fontSize: 20 }}>My Order</Text></View>


            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'tab1' && styles.activeTab]}
                    onPress={() => changeTab('tab1')}
                >
                    <Text>Delivered</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'tab2' && styles.activeTab]}
                    onPress={() => changeTab('tab2')}
                >
                    <Text>Processing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'tab3' && styles.activeTab]}
                    onPress={() => changeTab('tab3')}
                >
                    <Text>Canceled</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabContent}>
                {activeTab === 'tab1' && (

                    <View style={styles.Deli}>



                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />

                    </View>
                )}

                {activeTab === 'tab2' && (
                    <View>
                        <Text>Processing</Text>
                    </View>
                )}
                {activeTab === 'tab3' && (
                    <View>
                        <Text>Canceled</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default MyOrder

const styles = StyleSheet.create({
    separator: {
        height: 2,
        backgroundColor: '#ddd',
        marginTop: 10,
    },
    head: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    itemcontainer: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
    },
    detail: {
        width: 100,
        height: 40,
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 4,

    },
    orderid: {
        marginTop: 20,
        marginLeft: 10,
        fontFamily: 'NuniTo Sans',
        fontStyle: 'bold',
        fontSize: 16,
        fontWeight: '600',
        fontWeight: 'bold',


    },
    date: {
        fontFamily: 'NuniTo Sans',
        marginLeft: 100,
        fontWeight: '400',
        marginTop: 20,

        fontSize: 14,
    },
    quan: {
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 20,

        fontFamily: 'NuniTo Sans',
        fontWeight: '700',
        fontSize: 16,
    },
    price: {
        fontFamily: 'NuniTo Sans',
        marginLeft: 115,
        marginTop: 20,
        marginRight: 10,
        fontWeight: '600',
        fontSize: 16,
    },
    delivery: {
        color: 'green',
        fontWeight: '600',
        fontSize: 18,
        fontFamily: 'NuniTo Sans',
        marginTop: 10,
        marginLeft: 200,
        marginBottom: 10,
    },
    listItem: {


    },
    l1: {
        flexDirection: 'row',

    },

    containertab: {
        flex: 1,
        padding: 20,
    },

    tabs: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    tabButton: {
        padding: 10,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    activeTab: {
        backgroundColor: '#ddd',
    },
    tabContent: {

        flex: 1,
        alignItems: 'center',
    },
});