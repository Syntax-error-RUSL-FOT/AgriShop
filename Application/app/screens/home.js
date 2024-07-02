import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Imageslideshow from './imageslideshow'
import { Link, Stack } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Items from './items';
import Categorybar from './categorybar';


const Home = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    statusBarColor: 'green',
                    headerShown: false
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false} >
                {/* Header Section */}
                <View style={styles.header_title}>
                    <Image source={require('../../assets/icon.png')} style={styles.header_img} />
                    <Text style={styles.greething}>Hello 👋 {'\n'}Healthy and happy day! </Text>
                    <TouchableOpacity>
                        <Link href={{ pathname: './screens/login' }}>
                            <View style={{
                                backgroundColor: '#30c730',
                                borderRadius: 8,
                                padding: 10,
                                width: wp(18),
                                height: hp(5)
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Login</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>
                </View>
                <View>
                    <Imageslideshow />
                </View>
                {/* End Header Section */}

                {/* Category Section */}
                <View style={styles.category}>
                    <Categorybar />
                </View>
                {/* End Category Section */}

                {/* Sell Section */}
                <View style={styles.category}>
                    <View style={styles.category_title} >
                        <Text style={{
                            fontSize: 24,
                            fontWeight: '600',
                            color: 'darkgreen'
                        }}>Just For You</Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View>
                            <Items />
                        </View>
                    </ScrollView>

                </View>
                {/* End Sell Section */}
            </ScrollView>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header_title:
    {
        padding: '2%',
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomColor: 'green',
        borderBottomWidth: 2
    },
    header_img:
    {
        width: wp(15),
        height: hp(8)
    },
    greething:
    {
        fontSize: 22,
        fontWeight: '600',
        // color: 'white',
        textAlignVertical: 'center'
    },
    category:
    {
        paddingHorizontal: 25,
        // marginVertical: 30
    },
    category_title:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})