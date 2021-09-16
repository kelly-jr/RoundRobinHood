import { User, Session } from "../entities";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "src/types";

@InputType()
class UserInput {
	@Field()
	name: string;
}

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

	// Create
	@Mutation(() => User)
	createUser(@Arg("options") options: UserInput, @Ctx() { orm }: MyContext): Promise<User> {
		const manager = orm.manager;

		const user = manager.create(User, options);
		return manager.save(user);
	}
	
	// Update
	@Mutation(() => User)
	updateUser(@Arg("id") id: string, @Arg("name") name: string, @Ctx() { orm }: MyContext) {
		const manager = orm.manager;
		return manager
			.update(User, { id }, { name })
			.then(() => manager.findOne(User, id));
	}

	// Join Session
	@Mutation(() => User)
	async joinSession(@Arg("joiningCode") joiningCode: string, @Arg("name") username: string, @Ctx() { orm }: MyContext): Promise<User | undefined> {
		const manager = orm.manager;

		const session = await manager.findOneOrFail(Session, { joiningCode });
		const user = await manager.findOneOrFail(User, { name: username });
		session.users = [ user ];
		
		return manager
			.save(session)
			.then(() => manager.findOne(User, { name: username }));
	}
}
