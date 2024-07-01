import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link } from 'expo-router';

const Items = () => {
    const items = [
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        },
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        },
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        },
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        },
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        },
        {
            title: "Mango",
            price: "LKR 250.00",
            img: require('../../assets/login_bg.png')
        }
    ];
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Link href={{ pathname: './screens/itemview' }} style={{marginVertical: 10}}>
                    <View  style={styles.itemContainer}>
                        <Image source={item.img} style={{ width: '100%', height: '70%', borderRadius: 10, marginBottom: 20 }} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title}>{item.price}</Text>
                    </View>
                </Link>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <FlashList
                    data={items}
                    renderItem={renderItem}
                    numColumns={2}
                    estimatedItemSize={200} // Adjust based on estimated item height
                />
            </View>
        </View>
    )
}

export default Items

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