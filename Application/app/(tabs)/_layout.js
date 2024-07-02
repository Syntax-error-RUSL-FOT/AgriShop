import Icon from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green'}} >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="category_tab"
                options={{
                    title: 'All',
                    headerTintColor:'green',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => <Icon size={28} name="grid" color={color} />,
                }}
            />
            <Tabs.Screen
                name="cart_tab"
                options={{
                    title: 'Cart',
                    headerTintColor:'green',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => <Icon size={28} name="cart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile_tab"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon size={28} name="person" color={color} />,
                }}
            />
        </Tabs>
    );
}
