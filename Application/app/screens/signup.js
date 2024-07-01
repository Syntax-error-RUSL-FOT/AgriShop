import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Signup = () => {
    return (
        <View>
            <SafeAreaView style={{ flex: 2 }}>
                <KeyboardAvoidingView style={{ flex: 2 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                    <ImageBackground source={require('../../assets/signup_bg.png')} style={{
                        height: hp(100),
                        width: wp(100),
                        position: 'absolute',
                        flex: 1
                    }} resizeMode='cover' />
                    <Stack.Screen
                        options={{
                            title: 'Create an Account',
                            statusBarColor: 'green',
                            headerShown: false
                        }}
                    />

                    <View style={styles.signup_view}>
                        <View style={styles.signup_header}>
                            <Text style={styles.title}>Create an Account</Text>
                        </View>
                        {/* Signup form */}

                        <View>
                            <View style={styles.input_name}>
                                <TextInput placeholder='First Name' style={styles.inputN} />
                                <TextInput placeholder='Last Name' style={styles.inputN} />
                            </View>
                            <View style={styles.input_other}>
                                <TextInput placeholder='Email' style={styles.input} />
                                <TextInput placeholder='Password' style={styles.input} secureTextEntry />
                                <TextInput placeholder='Confirm Password' style={styles.input} secureTextEntry />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    paddingHorizontal: wp(20),
                                    textAlign: 'center'
                                }}>By tapping Sign up you accept all </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: wp(32),
                                    marginBottom: hp(1)
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '800',
                                        color: 'green'
                                    }}>terms </Text>
                                    <Text style={{
                                        fontSize: 18,
                                    }}>and </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '800',
                                        color: 'green'
                                    }}>condition</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Link href={{ pathname: './screens/home' }} style={styles.btn_singup}>
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
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    signup_view:
    {
        marginTop: hp(40),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'white',
        // opacity: 0.6,
        height: hp(80),
        width: wp(100),
        position: 'absolute',
        flex: 2
    },
    btn_back:
    {
        paddingTop: 15,
        // paddingLeft:15
    },
    title:
    {
        paddingTop: 20,
        fontSize: 32,
        fontWeight: '600',
        marginLeft: wp(18),
        marginBottom: hp(2)
    },
    signup_header:
    {
        flexDirection: 'row',
        width: wp(85),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(5)
    },
    input_name:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(8)
    },
    input_other:
    {
        paddingHorizontal: wp(8)
    },
    inputN:
    {
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 20,
        width: wp(40),
        height: hp(8),
        alignItems: 'center',
        paddingLeft: wp(5),
        // marginHorizontal: hp(5),
        marginVertical: wp(2),
        fontSize: 18
    },
    input:
    {
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 20,
        height: hp(8),
        alignItems: 'center',
        paddingLeft: wp(5),
        // marginHorizontal: hp(5),
        marginVertical: wp(2),
        fontSize: 18
    },
    btn_singup:
    {
        backgroundColor: '#3e8e23',
        height: hp(8),
        width: wp(90),
        marginHorizontal: 30,
        borderRadius: 15,
        // marginTop: hp(10),
        textAlignVertical: 'center'
    }
})