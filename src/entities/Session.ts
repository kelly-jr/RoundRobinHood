import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  // @Property({
  //   onCreate: () => {
  //     const currentTime = new Date();
  //     return currentTime.getTime() + DEFAULT_SESSION_EXPIRY;
  //   },
  // })
  @Field(() => Date)
  @Column()
  sessionExpiry: Date;
}
