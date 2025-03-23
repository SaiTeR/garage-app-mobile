export class UserModel {
    phone: string;
    name: string;
    surname: string;
    patronymic: string;
    password: string;
    email: string;
    bonus_balance: number;

    constructor() {
        this.phone = '';
        this.name = '';
        this.surname = '';
        this.patronymic = '';
        this.password = '';
        this.email = '';
        this.bonus_balance = 0;
    }
}