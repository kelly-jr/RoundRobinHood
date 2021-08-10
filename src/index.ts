import { MikroORM } from "@mikro-orm/core";
import { Session } from "inspector";
import { __prod__ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
	const orm = await MikroORM.init(mikroOrmConfig);

	const session = orm.em.create(Session, { joiningCode: "joiningTest123" });
	await orm.em.persistAndFlush(session);
};

main().catch((err) => console.error(err));
