import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Categories = [
    {
        title: 'Fruits',
        img: require('../../assets/category_icon/fruits.png')

    },
    {
        title: 'Vegetable',
        img: require('../../assets/category_icon/vegetable.png')

    },
    {
        title: 'Grains',
        img: require('../../assets/category_icon/grains.png')

    },
    {
        title: 'Dairy',
        img: require('../../assets/category_icon/dairy.png')

    },
    {
        title: 'Protein',
        img: require('../../assets/category_icon/protein.png')

    },
    {
        title: 'Juice',
        img: require('../../assets/category_icon/juice.png')

    }
]

const Category = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Categories',
                    statusBarColor: 'green',
                    headerTintColor:'green',
                    headerTitleAlign: 'center',
                }}
            />
            <Text>Category Screen</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})