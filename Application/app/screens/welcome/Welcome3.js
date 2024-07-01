import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link, Stack } from 'expo-router';

const Welcome3 = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    statusBarColor: 'green',
                    headerShown: false
                }}
            />
            <View style={{ position: 'absolute' }}>
                <View>
                    <Image source={require('../../../assets/icon.png')} style={styles.img} />
                </View>
                <Text style={styles.description}>Fast and responsibility delivery by our courier</Text>
                <View>
                    <TouchableOpacity>
                        <Link href={{ pathname: './screens/signup' }} style={styles.btn_singup}>
                            <View>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: '600',
                                    marginHorizontal: wp(25)
                                }}>Create An Account</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Link href={{ pathname: './screens/login' }} style={styles.btn_login}>
                            <View>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 24,
                                    fontWeight: '600',
                                    marginHorizontal: wp(40)
                                }}>Login</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Welcome3

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
        marginTop: hp(10),
        marginHorizontal: wp(10),
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 45,
        fontWeight: '600',
        color: '#5d6d6b',
        // position:'absolute'
    },
    btn_singup:
    {
        backgroundColor: '#3e8e23',
        height: hp(8),
        width: wp(90),
        marginHorizontal: 30,
        borderRadius: 15,
        marginTop: hp(10),
        textAlignVertical: 'center'
    },
    btn_login:
    {
        borderColor: '#3e8e23',
        borderWidth: 2,
        height: hp(8),
        width: wp(90),
        marginHorizontal: 30,
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: hp(5),
    }
})