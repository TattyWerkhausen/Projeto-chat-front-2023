export class DataUserModel{
  constructor(
  public name:string,
  public email:string
  ){}
}

export interface IDataUserModel{
  name: string,
  email:string
}
