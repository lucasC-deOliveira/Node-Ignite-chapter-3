import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";
import {hash} from "bcrypt"

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUserRepository) { }

    async execute({
        name,
        email,
        driver_license,
        password
    }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new Error("User Already Exist")
        }

        const passwordHash= await hash(password, 8)

        await this.userRepository.create({
            name,
            email,
            driver_license,
            password:passwordHash
        })
    }

}

export { CreateUserUseCase }