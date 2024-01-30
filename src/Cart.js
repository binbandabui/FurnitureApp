import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Cart = () => {

  const [data, setData] = useState(DATA)
  const renderItem = ({ item }) => {
    const { avt, ten, gia } = item;
    return (
      <View style={styles.cart}>
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.avt }}
          />
        </View>
        <View style={styles.thongtin}>
          <View>
            <Text style={{ color: 'gray', fontSize: 25 }}>{ten}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>$ + {gia}</Text>
          </View>
          <View>
            <Image source={require('../asset/img/imgnav/plus.png')} />
            <Text>01</Text>
            <Image source={require('../asset/img/imgnav/tru.png')} />
          </View>
        </View>
        <View style={styles.shape}>
          <Image source={require('../asset/img/imgnav/Shape.png')} />
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList

      />

      <View>
        <View>
          <Text>Total: </Text>
          <Text>9.000 </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign:'center', fontSize:20}}>Check out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cart: {
    width: '100%',
    flexDirection: 'row'
  },
  thongtin: {
    justifyContent: 'space-between '
  },

  button:{
    width:'100%',
    backgroundColor:'black',
    borderRadius:5
  }
})

var DATA = [
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 20.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 20.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 20.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 20.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 10.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 25.00
  },
  {
    avt: 'https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png',
    ten: 'Alibaba',
    gia: 20.00
  },

]