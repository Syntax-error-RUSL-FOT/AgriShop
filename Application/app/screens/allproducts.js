import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link, Stack } from 'expo-router';
import Test from './Test';
import { useNavigation } from '@react-navigation/native';

const Allproducts = () => {
    const navigation = useNavigation();
    const test = () => {
        navigation.navigate('addproduct');
    };

    <Stack.Screen
        options={{
            title: 'Add Products',
            statusBarColor: 'green',
            headerTintColor: 'green',
            headerTitleAlign: 'center',
        }}
    />
    return (
        <View>
            <View>
                
                <TouchableOpacity>
                    <Link href={{ pathname: '../screens/addproduct' }} style={{ marginLeft: wp(56), marginTop: hp(2), marginBottom: hp(5) }}>

                        <View style={{
                            backgroundColor: '#30c730',
                            borderRadius: 8,
                            padding: 10,
                            // width: wp(18),
                            height: hp(5),

                            // marginTop: hp(10)
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Add Product +</Text>
                        </View>

                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link href={{ pathname: '../screens/editproduct' }} style={{ marginLeft: wp(56), marginTop: hp(2), marginBottom: hp(5) }}>

                        <View style={{
                            backgroundColor: '#30c730',
                            borderRadius: 8,
                            padding: 10,
                            // width: wp(18),
                            height: hp(5),

                            // marginTop: hp(10)
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Edit Product +</Text>
                        </View>

                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link href={{ pathname: '../screens/deleteproduct' }} style={{ marginLeft: wp(56), marginTop: hp(2), marginBottom: hp(5) }}>

                        <View style={{
                            backgroundColor: '#30c730',
                            borderRadius: 8,
                            padding: 10,
                            // width: wp(18),
                            height: hp(5),

                            // marginTop: hp(10)
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Delete Product +</Text>
                        </View>

                    </Link>
                </TouchableOpacity>
                <Test />

            </View>
        </View>
    )
}

export default Allproducts

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
        marginVertical: 20,
        height: hp(30),
        width: wp(40),
    },
    image: {
        width: '50%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
})