import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Items from './items'
import Allproducts from './allproducts'



const Category = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'All Products',
                    statusBarColor: 'green',
                    headerTintColor:'green',
                    headerTitleAlign: 'center',
                }}
            />
            {/* <Items /> */}
            <Allproducts />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})