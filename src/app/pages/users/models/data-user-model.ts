export class DataUserModel {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}
export class IDataUserModel {
  constructor(public id: string, public name: string) {}
}
