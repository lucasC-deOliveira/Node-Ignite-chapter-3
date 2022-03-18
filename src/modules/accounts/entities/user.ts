import {v4 as uuid} from "uuid";
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity()
class User{
    @PrimaryColumn()
    id: string;

    @Column()
    name:string;
    
    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    driver_license: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id= uuid();
        }
    }

}

export {User}