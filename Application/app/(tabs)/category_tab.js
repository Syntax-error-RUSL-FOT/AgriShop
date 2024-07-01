import { View, StyleSheet } from 'react-native';
import Category from '../screens/category'


export default function Tab() {
    return (
        <View style={styles.container}>
            <Category />
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
