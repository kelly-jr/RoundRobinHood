"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
typeorm_1.createConnection(ormconfig_1.default)
    .then(() => {
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map