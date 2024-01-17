import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const TinTuc = (props) => {
    const [data, setData] = useState(DATA)
  return (
    <View>

      <View>
        <View>
            <Image source={require('../asset/img/tintuc.png')}/>
        </View>
        <View>
            <Text></Text>
            <Text></Text>
        </View>
      </View>
    </View>
  )
}

export default TinTuc

const styles = StyleSheet.create({})

 var DATA=[
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
    {
        tieude:'Your order #123456789 has been confirmed',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. '
    },
 ]
