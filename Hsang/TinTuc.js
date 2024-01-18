import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'

const TinTuc = (props) => {
    const [data, setData] = useState(DATA)
    return (
        <View style={styles.container}>
            <View style={styles.tit}>
                <Image source={require('../asset/img/Search.png')} style={styles.searchic}/>
                <Text style={styles.navi}>Notification</Text>   
            </View>

            <View style={styles.bigview}>
                <View style={styles.hinhanh}>
                    <Image source={require('../asset/img/tintuc.png')} style={styles.img} />
                </View>
                <View style={styles.smallview}>
                    <Text style={styles.title}>Your order #123456789 has been confirmed</Text>
                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text>
                </View>
            </View>

            <View style={styles.bigview}>
                <View style={styles.hinhanh}>
                    <Image source={require('../asset/img/tintuc.png')} style={styles.img} />
                </View>
                <View style={styles.smallview}>
                    <Text style={styles.title}>Your order #123456789 has been confirmed</Text>
                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text>
                </View>
            </View>

            <View>
                <Text style={{
                    color: '#242424',
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                    Discover hot sale furnitures this week.
                </Text>
                <Text style={{
                    marginTop: 7,
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'gray',
                    fontSize: 13
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </Text>
            </View>

            <ScrollView
                style={styles.ScrollView}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {
                    data.map((item, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.bigview}>
                                    <View style={styles.hinhanh}>
                                        <Image source={require('../asset/img/tintuc.png')} style={styles.img} />
                                    </View>
                                    <View style={styles.smallview}>
                                        <Text style={styles.title}>{item.tieude}</Text>
                                        <Text style={styles.content}>{item.noidung}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>

        </View>
    )
}

export default TinTuc

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 15
    },
    bigview: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        marginBottom: 15
    },
    smallview: {
        marginLeft: 10,
        width: '70%'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#242424'
    },
    content: {
        marginTop: 7,
        fontSize: 12,
        fontWeight: '400',
        color: 'gray',
        fontSize: 13
    },
    img: {
        width: 100,
        height: 100
    },
    ScrollView: {
        marginTop: 20
    },
    tit: {
        marginBottom: 20,
    },
    navi: {
        alignSelf:'center',
        fontSize: 18,
        color: 'black',
        fontWeight:'bold'
    },
    searchic:{
        top:5,
        left:6,
        position: 'absolute',
    }

})

var DATA = [
    {   avt:'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
        tieude: 'Alibaba',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Choll har',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Your order #123456789 has been confirmed',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Your order #123456789 has been confirmed',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Your order #123456789 has been confirmed',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Your order #123456789 has been confirmed',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude: 'Your order #123456789 has been confirmed',
        noidung: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
]
