import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Imageslideshow = () => {

    const img = [
        require('../../assets/slideshow_img/vegetable.png'),
        require('../../assets/slideshow_img/grains.png'),
        require('../../assets/slideshow_img/juice.png'),
        require('../../assets/slideshow_img/dairy.png'),
        require('../../assets/slideshow_img/fruits.png'),
        require('../../assets/slideshow_img/protein.png'),
    ];

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={wp(100)}
                height={hp(25)}
                autoPlay={true}
                data={img}
                mode='parallax'
                parallaxScrollingScale={0.9}
                parallaxScrollingOffset={50}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index, item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                            borderRadius: 25,
                            borderColor: 'white',
                            marginTop: '5%',
                        }}
                    >
                        {/* <ActivityIndicator size="small" /> */}
                        <Image source={item} style={{
                            height: '130%',
                            width: '100%',
                            borderRadius: 25
                        }} />
                    </View>
                )}
            />
        </View>
    );
};

export default Imageslideshow;

const styles = StyleSheet.create({});
