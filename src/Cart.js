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
            <Text style={{ color: 'gray', fontSize: 15 }}>{ten}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{gia}</Text>
          </View>

          <View style={{flexDirection:"row",}}>
            <View style={{width:10, height:10, }}>
            <Image source={require('../asset/img/cong.png')}  />
            </View>
            <Text style={{margin:10}} >01</Text>
            <View style={{width:10, height:10, }}>
            <Image source={require('../asset/img/tru1.png')}/>
            </View>

          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', color: 'green', fontWeight: 'bold', alignSelf: 'center' }}>
          <Image source={require('../asset/img/Shape.png')} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        data={DATA}
        renderItem={renderItem}
      />

      <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:'15'}}>
          <Text style={{fontSize:20}}>Total: </Text>
          <Text style={{fontSize:20 , fontWeight:'bold', color:'black'}}>9.000 </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign:'center', fontSize:20,color:'white'}}>Check out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:12
    
  },
  
  cart: {
    width: 400,
    height:100,
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
   justifyContent:'space-between'
  },
  thongtin: {
    width:'40%'
  },

  button:{
    width:'100%',
    height:35,
    backgroundColor:'black',
    borderRadius:5
  },
  shape:{
    
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