import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Welcome2 = () => {
    return (
        <View>
            <View style={{ position: 'absolute' }}>
                <View>
                    {/* Need to replace image */}
                    <Image source={require('../../../assets/icon.png')} style={styles.img} />
                </View>
                <Text style={styles.description}>We provide best quality product to your family</Text>
                <TouchableOpacity>
                    <View style={styles.next_btn}>
                        <Text style={styles.btn_text}>NEXT</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Welcome2

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