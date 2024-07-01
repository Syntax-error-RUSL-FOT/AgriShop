import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import Welcome1 from './welcome/Welcome1'

const Onboardingscreens = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator pagingEnabled>
                <View>
                    {/* <Welcome1 /> */}
                    <Text></Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Onboardingscreens

const styles = StyleSheet.create({})