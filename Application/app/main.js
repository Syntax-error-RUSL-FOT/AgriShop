import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Welcome1 from './screens/welcome/Welcome1';
import Welcome2 from './screens/welcome/Welcome2';
import Welcome3 from './screens/welcome/Welcome3';
import Login from './screens/login';
import Singup from './screens/signup';
import Home from './screens/home';
import Imageslideshow from './screens/imageslideshow';
import TabLayout from './(tabs)/_layout';
import Onboardingscreens from './screens/onboardingscreens';


export default function Index() {
    return (
        <View>
            <Stack.Screen
                options={{
                    statusBarColor: 'green',
                    headerShown: false,
                }}
            />
            {/* <Welcome1 /> */}
            {/* <Welcome2 /> */}
            {/* <Welcome3 /> */}
            {/* <Login /> */}
            {/* <Singup /> */}
            {/* <Home /> */}
            {/* <TabLayout /> */}
            {/* <Imageslideshow /> */}
            {/* <Onboardingscreens /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});
