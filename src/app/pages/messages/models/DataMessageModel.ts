export class DataMessageModel {
  constructor(
    public id: string,
    public idUserSend: string,
    public idUserReceive: string,
    public content: string
  ) {}
}
export class DataMessageModelEdit {
  constructor(
  public id: string,
  public content: string
  ){}
}
