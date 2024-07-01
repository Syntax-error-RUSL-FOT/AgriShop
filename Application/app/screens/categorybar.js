import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '@expo/vector-icons/Ionicons'

const Categorybar = () => {
    return (
        <View>


            {/* Category Section */}
            <View style={styles.category}>
                <View style={styles.category_title} >
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        color: 'darkgreen'
                    }}>Categories</Text>
                    <TouchableOpacity>
                        <Link href={{ pathname: './screens/category' }}>
                            <Icon name='arrow-forward-circle-outline' size={36} color='green' />
                        </Link>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{
                        flexDirection: 'row',
                        columnGap: 25
                    }}>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/fruits.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Fruits</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/vegetable.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Vegetable</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/grains.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Grains</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/dairy.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Dairy</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/protein.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Protein</Text>
                        </View>
                        <View style={styles.category_item}>
                            <Image source={require('../../assets/category_icon/juice.png')} style={styles.category_icon} />
                            <Text style={{
                                textAlign: 'center',
                                marginTop: 5,
                                color: 'green',
                                fontWeight: '600'
                            }}>Juice</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
            {/* End Category Section */}

        </View>
    )
}

export default Categorybar

const styles = StyleSheet.create({
    category:
    {
        marginVertical: 30
    },
    category_title:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category_item:
    {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        height: hp(8),
        width: wp(15),
        marginVertical: 20,
    }
})