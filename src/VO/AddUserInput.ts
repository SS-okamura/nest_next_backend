export class AddUserInput {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  toArray() {
    return {
      name: this._name,
      email: this._email,
      password: this._password,
    };
  }
}
