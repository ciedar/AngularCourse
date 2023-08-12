export class User {
    public email: string;
    public passowrd: string;
    public returnSecureToken: boolean

    constructor(userName: string, passowrd: string, secureToken: boolean) {
        this.email = userName;
        this.passowrd = passowrd;
        this.returnSecureToken = true;

    }
}
