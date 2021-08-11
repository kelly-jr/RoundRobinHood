import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date = new Date();

  // @Property({ onUpdate: () => new Date() })
  @Column()
  updatedAt: Date = new Date();

  @Column()
  joiningCode!: string;

  // @Property({
  //   onCreate: () => {
  //     const currentTime = new Date();
  //     return currentTime.getTime() + DEFAULT_SESSION_EXPIRY;
  //   },
  // })
  @Column()
  sessionExpiry: Date;
}
