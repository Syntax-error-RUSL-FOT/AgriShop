import { View, StyleSheet } from 'react-native';
import Cart from '../screens/cart';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Cart />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
