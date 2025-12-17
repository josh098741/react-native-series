// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
// import 'react-native-reanimated'
import { Appearance } from 'react-native'
import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground }, headerTintColor: theme.text, headerShadowVisible: false  }} >
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="menu" options={{ title: "Menu", headerShown: true, headerTitle: "Coffee Shop Menu" }} />
      <Stack.Screen name="contact" options={{ title: "Contact", headerShown: true, headerTitle: "Contact Us" }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> 
    </Stack>

  );
}
