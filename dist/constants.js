"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SESSION_EXPIRY = exports.__prod__ = void 0;
exports.__prod__ = process.env.environment === "production";
exports.DEFAULT_SESSION_EXPIRY = 1 * 60 * 60 * 1000;
//# sourceMappingURL=constants.js.map