import { Text, View, StyleSheet, Button, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Alert  } from 'react-native';
import {UserModel} from "@/models/UserModel";
import { Link, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';

import { UserViewModel } from '../view_models/UserViewModel';

export default function Index() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true); // Добавим состояние для загрузки
  const userViewModel = new UserViewModel();

  // Загружаем данные пользователя при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserViewModel.getUserModel(); // Предположим, что getUserModel тоже асинхронный
        console.log('User Data:', data);  // Проверка данных
        setUserData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных пользователя:', error);
        Alert.alert('Ошибка', 'Не удалось загрузить данные пользователя');
      } finally {
        setLoading(false); // Загружаем состояние по завершении
      }
    };

    fetchData();
  }, []);

  const redirectForm = () => {
    router.push('/form');
  };

  const redirectProfile = () => {
    router.push('/profile');
  };

  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Личный профиль</Text>

          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GJC_2D3SxU64hylhXbix10aToSDKl0cT0Q&s' }} style={styles.avatar} />

          {loading ? (
              <Text style={styles.nameText}>Загрузка...</Text>  // Пока идет загрузка, показываем "Загрузка..."
          ) : userData ? (
              <>
                <Text style={styles.nameText}>
                  {userData.name} {userData.surname} {userData.patronymic}
                </Text>
                <Text style={styles.phoneText}>{userData.phone}</Text>
              </>
          ) : (
              <Text style={styles.nameText}>Нет данных пользователя</Text> // Если данных нет, выводим сообщение
          )}

          <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
            {/* Ваши другие компоненты */}
          </ScrollView>

          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={redirectForm}>
              <MaterialCommunityIcons name="car" size={50} color="white" />
              <Text style={styles.navText}>Запись</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={redirectProfile}>
              <MaterialCommunityIcons name="account-circle" size={50} color="white" />
              <Text style={styles.navText}>Профиль</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

Index.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
    marginBottom: 5,
    fontFamily: 'Bahnschrift',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  scrollArea: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#7675fa',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 24,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    color: '#000000',
    marginBottom: 10,
    fontSize: 16,
  },
  titleText: {
    marginTop: 60,
    color: '#000000',
    marginBottom: 25,
    fontSize: 36,
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carContainer: {
    borderColor: '#7675fa',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    width: '80%',
    marginBottom: 15,
  },
  carText: {
    fontSize: 18,
    textAlign: 'left',
  },
  warnText: {
    marginTop: 60,
    color: 'red',
    fontSize: 30,
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 224,
    height: 120,
    resizeMode: 'contain',
  },
  input: {
    height: 52,
    borderColor: '#7675fa',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
  },
  linkText: {
    color: '#0047E1',
    marginTop: 20,
    textDecorationLine: 'underline'
  },
  button: {
    marginTop: 138,
    height: 52,
    borderColor: '#7675fa',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#7675fa',
    width: 219,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
  },
});
