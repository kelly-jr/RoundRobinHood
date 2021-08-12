import { MyContext } from "src/types";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Session } from "../entities";

@Resolver()
export class SessionResolver {
  @Query(() => [Session])
  sessions(@Ctx() { orm }: MyContext): Promise<Session[]> {
    const sessionTable = orm.getRepository(Session);
    return sessionTable.find();
  }

  @Query(() => Session, { nullable: true })
  session(@Arg("id", () => String) id: string, @Ctx() { orm }: MyContext): Promise<Session | undefined> {
    const sessionTable = orm.getRepository(Session);
    return sessionTable.findOne({ where: { id } });
  }
}
