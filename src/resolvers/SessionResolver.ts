import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Session } from "../entities";
import { setSessionExpiryTimeStamp } from "../utility/sessionFunctions";

@InputType()
class SessionInput {
  @Field()
  joiningCode: string;

  @Field({ nullable: true })
  sessionExpiry: number;
}

@Resolver()
export class SessionResolver {
  // Read all session
  @Query(() => [Session])
  sessions(@Ctx() { orm }: MyContext): Promise<Session[]> {
    return orm.find(Session, {});
  }

  // Read 1 session
  @Query(() => Session, { nullable: true })
  session(@Arg("id", () => String) id: string, @Ctx() { orm }: MyContext): Promise<Session | undefined> {
    return orm.findOne(Session, { id });
  }

  // Create
  @Mutation(() => Session)
  createSession(@Arg("options") options: SessionInput, @Ctx() { orm }: MyContext): Promise<Session> {
    const userOptions = options.sessionExpiry
      ? { ...options, sessionExpiry: setSessionExpiryTimeStamp(options.sessionExpiry) }
      : { ...options };
    const session = orm.create(Session, userOptions);

    return orm.save(session);
  }

  // Update
  // You can only update the session expiry time
  @Mutation(() => Session)
  async updateSession(@Arg("id") id: string, @Arg("sessionExpiry") sessionExpiry: number, @Ctx() { orm }: MyContext) {
    return orm.update(Session, { id }, { sessionExpiry: setSessionExpiryTimeStamp(sessionExpiry) }).then(() => orm.findOne(Session, id));
  }

  // Delete
  @Mutation(() => Boolean)
  deleteSession(@Arg("id") id: string, @Ctx() { orm }: MyContext) {
    return orm
      .delete(Session, id)
      .catch(() => false)
      .then(() => true);
  }
}
