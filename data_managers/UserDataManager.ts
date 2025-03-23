import AsyncStorage from '@react-native-async-storage/async-storage';

class DataManager {
    static async saveUserData(data: JSON): Promise<void> {
        try {
            await AsyncStorage.setItem('user_data', JSON.stringify(data));
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
        }
    }

    static async loadUserData(): Promise<JSON | null> {
        try {
            const data = await AsyncStorage.getItem('user_data');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            return null;
        }
    }

    static async clearUserData(): Promise<void> {
        try {
            await AsyncStorage.removeItem('user_data');
        } catch (error) {
            console.error('Ошибка при удалении данных:', error);
        }
    }
}

export default DataManager;
