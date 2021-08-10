"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inspector_1 = require("inspector");
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
exports.default = {
    entities: [inspector_1.Session],
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[jt]s$/,
    },
    dbName: "roundrobinhood",
    type: "postgresql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map