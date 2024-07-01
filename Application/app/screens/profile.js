import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '@expo/vector-icons/Ionicons'


const Profile = () => {
  const user = [
    {
      img: require('../../assets/user.jpg'),
      name: "Hasan Chinthaka"
    }
  ]
  return (
    <View style={{}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30
      }}>
        <View style={{
          height: hp(15),
          width: wp(28),
        }}>
          <Image source={require('../../assets/user.jpg')} style={{
            width: '100%',
            height: '100%',
            borderRadius: 70,
            borderWidth: 4,
            borderColor: 'green',
          }} />
        </View>
        <Text style={{ textAlignVertical: 'center', fontSize: 32, fontWeight: '600' }}>Hasan Chinthaka</Text>
      </View>
      <View style={{
        backgroundColor: '#336aea',
        borderRadius: 8,
        padding: 10,
        width: wp(20),
        left: wp(43),
        top: hp(-7)
      }}>
        <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Login</Text>
      </View>
      <View style={{ borderBottomColor: '#e5e5e5', borderBottomWidth: 2, marginTop: hp(-4) }}></View>
      <View style={{ borderBottomColor: '#e5e5e5', borderBottomWidth: 2, padding: 20, flexDirection:'row' }}>
        <Icon name='create' size={24} color='green' style={{paddingRight: 10}}/>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'darkgreen' }}>Edit Profile</Text>
      </View>
      <View style={{ borderBottomColor: '#e5e5e5', borderBottomWidth: 2, padding: 20, flexDirection:'row'}}>
        <Icon name='log-out' size={24} color='#f76464' style={{paddingRight: 10}} />
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#f76464' }}>Logout</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})