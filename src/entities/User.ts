import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Session } from "./Session";

@Entity()
@ObjectType({ description: "User model to keep track of users in round robin meeting session" })
export class User {
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
  name: String;
  
  @Field(() => Boolean)
  @Column({ default: false })
  isSessionAdmin: Boolean;
  
  @ManyToOne(() => Session, session => session.id)
  @Field(() => Session)
  session: Session;
}