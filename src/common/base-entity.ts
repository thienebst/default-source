import { Column, Generated, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    // @Column()
    // createdBy: string;

    // @Column()
    // updatedBy: string;

    // @Column()
    // createdOn: Date;

    // @Column()
    // updatedOn: Date;
}