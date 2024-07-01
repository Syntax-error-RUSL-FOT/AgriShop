import { View, StyleSheet} from 'react-native';
import Profile from '../screens/profile';

export default function Tab() {
    return (
        <View style={styles.container}>
            {/* <Index /> */}
            {/* <Text>Profile</Text> */}
            <Profile />
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
