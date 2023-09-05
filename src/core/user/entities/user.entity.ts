
import { BaseEntity } from "src/common/base-entity";
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {  
    @Column({
        unique: true,
    })
    public username: string;

    @Column({
        unique: true,
    })
    public email: string;

    @Column({
        select: false,
    })
    public password: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;
}
