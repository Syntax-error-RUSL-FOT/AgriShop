import { View, StyleSheet } from 'react-native';
import Index from '../main';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Index />
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
