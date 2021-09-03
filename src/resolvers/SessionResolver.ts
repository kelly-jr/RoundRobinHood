import { nanoid } from "nanoid";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Session } from "../entities";
import { setSessionExpiryTimeStamp } from "../utility/sessionFunctions";

@InputType()
class SessionInput {
  @Field({ nullable: true })
  joiningCode: string;

  @Field({ nullable: true })
  sessionExpiry: number;
}

@Resolver()
export class SessionResolver {
  // Read all session
  @Query(() => [Session])
  sessions(@Ctx() { orm }: MyContext): Promise<Session[]> {
    const manager = orm.manager;
    return manager.find(Session, {});
  }

  // Read 1 session
  @Query(() => Session, { nullable: true })
  session(@Arg("id", () => String) id: string, @Ctx() { orm }: MyContext): Promise<Session | undefined> {
    const manager = orm.manager;
    return manager.findOne(Session, { id });
  }

  // Create
  @Mutation(() => Session)
  createSession(@Arg("options") options: SessionInput, @Ctx() { orm }: MyContext): Promise<Session> {
    const manager = orm.manager;

    let userOptions = { ...options, sessionExpiry: setSessionExpiryTimeStamp(options.sessionExpiry) };

    if (!options.joiningCode) userOptions = { ...userOptions, joiningCode: nanoid(12) };

    const session = manager.create(Session, userOptions);

    return manager.save(session);
  }

  // Update
  // You can only update the session expiry time
  @Mutation(() => Session)
  async updateSession(@Arg("id") id: string, @Arg("sessionExpiry") sessionExpiry: number, @Ctx() { orm }: MyContext) {
    const manager = orm.manager;
    return manager
      .update(Session, { id }, { sessionExpiry: setSessionExpiryTimeStamp(sessionExpiry) })
      .then(() => manager.findOne(Session, id));
  }

  // Delete
  @Mutation(() => Boolean)
  deleteSession(@Arg("id") id: string, @Ctx() { orm }: MyContext) {
    const manager = orm.manager;
    return manager
      .delete(Session, id)
      .catch(() => false)
      .then(() => true);
  }
}
