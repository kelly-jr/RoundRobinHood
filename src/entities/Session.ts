import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
@ObjectType({ description: "Model for the round robin meeting session" })
export class Session {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String)
  @Column()
  joiningCode!: string;

  @Field(() => Date)
  @Column()
  sessionExpiry: Date;

  @OneToMany(() => User, (user) => user.id, { cascade: true })
  @Field(() => [User])
  users: User[];
}
