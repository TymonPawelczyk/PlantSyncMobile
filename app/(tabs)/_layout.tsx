import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useColorScheme } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const colors = {
        text: colorScheme === 'dark' ? '#F0EAD2' : '#000000',
        background: colorScheme === 'dark' ? '#414833' : '#D8D7D4',
    };
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      tabBarStyle: {
        backgroundColor: colors.background,
        borderTopColor: colors.background,
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen name="plants" options={{
          title: 'Plants',
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'leaf' : 'leaf-outline'} color={color} size={24} />
          ),
        }} />
      <Tabs.Screen name="tasks"options={{
          title: 'Tasks',
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'clipboard-outline' : 'clipboard-outline'} color={color} size={24} />
          ),
        }} />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}