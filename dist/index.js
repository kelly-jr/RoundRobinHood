"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const inspector_1 = require("inspector");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const session = orm.em.create(inspector_1.Session, { joiningCode: "joiningTest123" });
    await orm.em.persistAndFlush(session);
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map