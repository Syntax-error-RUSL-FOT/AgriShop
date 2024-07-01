import { View, StyleSheet } from 'react-native';
import Home from '../screens/home';
import Index from '../main';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Home />
            {/* <Index /> */}
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
