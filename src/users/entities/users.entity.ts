import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Users {
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, await bcrypt.genSalt());
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: null})
    first_name: string;

    @Column({default: null})
    last_name: string;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column({default: null})
    password: string;

    @Column({default: null})
    phone: string;

    @Column({default: null})
    avatar: string;

    @Column({default: null})
    created_at: Date;

    @Column({default: null})
    updated_at: Date;
}


