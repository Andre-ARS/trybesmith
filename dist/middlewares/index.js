"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = exports.errorHandler = void 0;
const authMiddleware_1 = __importDefault(require("./authMiddleware"));
exports.tokenValidation = authMiddleware_1.default;
const errorHandler_1 = __importDefault(require("./errorHandler"));
exports.errorHandler = errorHandler_1.default;
