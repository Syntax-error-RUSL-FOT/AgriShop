import { Stack } from 'expo-router/stack';
import Onboardingscreens from './screens/onboardingscreens';
import TabLayout from './(tabs)/_layout';

export default function Layout() {
    return (
        <Stack>
            {/* <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboardingscreens} /> */}
            <Stack.Screen name="(tabs)" options={{ statusBarColor: 'green', headerShown: false }} />
        </Stack>
    );
}
