import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform, ToastAndroid, Alert
} from 'react-native';


import { Link, useRouter } from 'expo-router';
import UserDataManager from "@/data_managers/UserDataManager";
import {UserViewModel} from "@/view_models/UserViewModel";

import React, { useState, useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  const userVM = new UserViewModel();
  // Состояния для хранения данных email и пароля
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Загружаем данные пользователя при монтировании компонента
  // useEffect(() => {
  //   // UserDataManager.clearUserData()
  //
  //
  //   const checkUserData = async () => {
  //     const data = await UserViewModel.getUserModel();
  //
  //     if (data != new UserViewModel()) {
  //       router.push('/form');
  //     }
  //   };
  //   checkUserData();
  // }, []);


  const handleLogin = async () => {
    if (!email || !password) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Заполните все поля', ToastAndroid.SHORT);
      } else {
        Alert.alert('Заполните все поля');
      }

      return;
    }

    const wasError = await UserViewModel.getUserDataFromAPI(email, password);

    if (wasError) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Ошибка авторизации', ToastAndroid.SHORT);
      } else {
        Alert.alert('Ошибка', 'Ошибка авторизации');
      }

      return;
    } else {
      router.push('/form');
    }
  };
  
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        
        <Text style={styles.titleText}>Авторизация</Text>
        
        
        <View style={styles.inputContainer}> 
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email} // Значение из состояния email
            onChangeText={(text) => setEmail(text)} // Обновляем состояние при вводе
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}> 
          <Text style={styles.text}>Пароль</Text>
          <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={password} // Значение из состояния password
              onChangeText={(text) => setPassword(text)} // Обновляем состояние при вводе
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ВХОД</Text>
        </TouchableOpacity>

        <Link href="/register" style={styles.linkText}>
          Нет аккаунта?
        </Link>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

Index.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
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
    marginTop: 25,
    color: '#000000',
    marginBottom: 25,
    fontSize: 36,
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
  },
  logo: {
    width: 224,
    height: 120, 
    resizeMode: 'contain',
    marginTop: 60,
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
