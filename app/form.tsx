import { Text, View, StyleSheet, Button, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Alert  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ToastAndroid, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';



export default function Index() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState();
  const redirectForm = () => {
    router.push('/form');
  };

  const redirectProfile = () => {
    router.push('/profile');
  };

  const hadleRegisterForm = () => {

    // Логика создания новой записи на осблуживание //

    if (Platform.OS === 'android') {
      ToastAndroid.show('Запись оформлена', ToastAndroid.SHORT);
    } else {
      Alert.alert('Запись оформлена');
    }
  };


  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Запись на{'\n'}техническое{'\n'}обслуживание</Text>

          <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.warnText}>Данный экран в стадии разработки.</Text>

            {/*<View style={styles.inputContainer}>*/}
            {/*  <Text style={styles.text}>Марка</Text>*/}
            {/*  <TextInput*/}
            {/*      style={styles.input}*/}
            {/*  />*/}
            {/*</View>*/}

            {/*<View style={styles.inputContainer}>*/}
            {/*  <Text style={styles.text}>Модель</Text>*/}
            {/*  <TextInput*/}
            {/*      style={styles.input}*/}
            {/*  />*/}
            {/*</View>*/}

            {/*<TouchableOpacity style={styles.button} onPress={hadleRegisterForm}>*/}
            {/*  <Text style={styles.buttonText}>ЗАПИСАТЬСЯ</Text>*/}
            {/*</TouchableOpacity>*/}
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
