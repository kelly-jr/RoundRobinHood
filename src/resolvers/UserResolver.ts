import { User } from "../entities";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "src/types";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(@Ctx() { orm }: MyContext): Promise<User[]> {
    const userTable = await orm
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.session", "session")
      .getMany();
    return userTable;
  }
  
  @Query(() => User, { nullable: true })
  async user(@Arg("id", () => String) id:String, @Ctx() { orm }: MyContext): Promise<User | undefined> {
    const userTable = await orm
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.session", "session")
      .where({ id });
    return userTable.getOne();
  }
}
