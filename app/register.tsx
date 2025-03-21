import { Text, View, StyleSheet, Button, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleRegister = () => {
    /* Логика регистрации */

    router.push('/form');
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        
        <Text style={styles.titleText}>Регистрация</Text>
        
        <View style={styles.inputContainer}> 
          <Text style={styles.text}>ФИО</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        
        <View style={styles.inputContainer}> 
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}> 
          <Text style={styles.text}>Пароль</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
        </TouchableOpacity>

        <Link href="/" style={styles.linkText}>
          Уже есть аккаунт?
        </Link>
      </View>
    </TouchableWithoutFeedback>
    
  );
}



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
    marginTop: 25,
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
