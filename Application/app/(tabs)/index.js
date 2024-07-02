import { View, StyleSheet } from 'react-native';
import Home from '../screens/home';
import Index from '../main';
import Test from '../screens/Test';

export default function Tab() {
    return (
        <View>
            <Home />
            {/* <Index /> */}
            {/* <Test /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "8%"
    },
});
