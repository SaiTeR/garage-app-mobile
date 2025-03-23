import UserDataManager from "@/data_managers/UserDataManager";
import {UserModel} from "@/models/UserModel";
import {Alert, Platform, ToastAndroid} from "react-native";
export class UserViewModel {
    // Отправка запроса на API и сохранение его в постоянной памяти через UserDataManager
    static async getUserDataFromAPI(email: string, password: string) {
        const response = await fetch('http://mobile-api.ddns.net/client/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.status != 200) {
            return true;
        }

        const data = await response.json();
        await UserDataManager.saveUserData(data);
        console.log("Данные загружены");

        return false;
    }

    // Получение данных пользователя
    static async getUserModel() {
        const user = new UserModel()

        try {
            const userData = await UserDataManager.loadUserData(); // Загружаем данные из хранилища
            if (userData) {
                const parsedData = userData as unknown as UserModel;

                user.name = parsedData.name;
                user.surname = parsedData.surname;
                user.patronymic = parsedData.patronymic;

                user.phone = parsedData.phone;
                user.email = parsedData.email;

                user.password = parsedData.password;
                user.bonus_balance = parsedData.bonus_balance;
            }
        } catch (error) {
            console.error("Ошибка при получении данных пользователя:", error);
        }

        return user;
    }
}
