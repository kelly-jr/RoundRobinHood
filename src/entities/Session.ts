import { Entity, SerializedPrimaryKey, Property, PrimaryKey } from "@mikro-orm/core";
import { DEFAULT_SESSION_EXPIRY } from "src/constants";

@Entity()
export class Session {
  @PrimaryKey()
  _id!: string;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  joiningCode!: string;

  @Property({
    onCreate: () => {
      const currentTime = new Date();
      return currentTime.getTime() + DEFAULT_SESSION_EXPIRY;
    },
  })
  sessionExpiry!: Date;
}
