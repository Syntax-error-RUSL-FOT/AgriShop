import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Category = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Categories',
                    statusBarColor: 'green',
                    // navigationBarColor: 'green',
                    headerTintColor:'green'
                    // headerShown: false
                }}
            />
            <Text>Category Screen</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})