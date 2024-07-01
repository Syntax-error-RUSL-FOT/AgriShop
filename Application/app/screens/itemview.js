import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {items} from './items'

const Itemview = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Item',
                    statusBarColor: 'green',
                    // navigationBarColor: 'green',
                    headerTintColor: 'green'
                    // headerShown: false
                }}
            />
            <Text>Itemview</Text>
        </View>
    )
}

export default Itemview

const styles = StyleSheet.create({})