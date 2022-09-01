"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = exports.validateLogin = void 0;
const joi_1 = __importDefault(require("joi"));
const validateBody = (userInfo) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().empty().required(),
        password: joi_1.default.string().empty().required(),
    });
    const { error } = schema.validate(userInfo);
    if (error)
        throw error;
};
exports.validateBody = validateBody;
const validateLogin = (result) => {
    if (!result) {
        const err = new Error('Username or password invalid');
        err.name = 'InvalidData';
        throw err;
    }
};
exports.validateLogin = validateLogin;
