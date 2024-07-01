import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link, Stack } from 'expo-router';

const Welcome1 = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View style={{ position: 'absolute' }}>
                <View>
                    <Image source={require('../../../assets/icon.png')} style={styles.img} />
                </View>
                <Text style={styles.description}>Welcome to KADE! Your AgriShop application</Text>
                <Link href={'/Welcome2'}>
                    <TouchableOpacity>
                        <View style={styles.next_btn}>
                            <Text style={styles.btn_text}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

export default Welcome1

const styles = StyleSheet.create({
    img:
    {
        width: 250,
        height: 250,
        verticalAlign: 'middle',
        margin: 100
    },
    description:
    {
        marginTop: hp(20),
        marginHorizontal: wp(10),
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 45,
        fontWeight: '600',
        color: '#5d6d6b',
        // position:'absolute'
    },
    next_btn:
    {
        backgroundColor: '#3e8e23',
        height: hp(7),
        width: wp(90),
        marginTop: hp(15),
        marginHorizontal: 30,
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 15,
    },
    btn_text:
    {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    }
})