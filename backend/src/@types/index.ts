export type ApiMensage = {
    error:boolean,
    message:string

  }

export type User = {
    name: string,
    lastName: string,
    userName: string,
    email: string,
    image: string,
    password: string
    _id?:String
  }
export type UserShow = {
  name: string,
    lastName: string,
    userName: string,
    email: string,
    image: string,
    _id?:String

}
