import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../entities/user"


interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email:string):Promise<User>
}

export { IUserRepository }