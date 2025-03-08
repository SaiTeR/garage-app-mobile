import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Авторизация' }} />
        <Stack.Screen name="register" options={{ title: 'Регистрация' }} />
        
        <Stack.Screen name="form" options={{ title: 'Запись на техническое обслуживание' }} />
        <Stack.Screen name="profile" options={{ title: 'Личный профиль' }} />
        <Stack.Screen name="car" options={{ title: 'Автомобиль' }} />
        <Stack.Screen name="chat" options={{ title: 'Чат' }} />
      </Stack>
  );
}
