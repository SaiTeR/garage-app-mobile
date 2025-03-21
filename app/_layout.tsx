import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function Navigation() {
  return (
      <Stack>
          <Stack.Screen name="index" options={{ title: 'Авторизация', headerShown: false }} />
          <Stack.Screen name="register" options={{ title: 'Регистрация', headerShown: false}} />

          <Stack.Screen name="form" options={{ title: 'Запись на техническое обслуживание', headerShown: false }} />
          <Stack.Screen name="profile" options={{ title: 'Личный профиль', headerShown: false }} />
          <Stack.Screen name="car" options={{ title: 'Автомобиль', headerShown: false }} />
          <Stack.Screen name="chat" options={{ title: 'Чат', headerShown: false }} />
      </Stack>
  );
}
