"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateBody = (user) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().min(3).required(),
        classe: joi_1.default.string().min(3).required(),
        level: joi_1.default.number().min(1).required(),
        password: joi_1.default.string().min(8).required(),
    });
    const { error } = schema.validate(user);
    if (error && error.message.includes('required'))
        throw error;
    if (error) {
        const err = new Error(error.message);
        err.name = 'Unprocessable';
        throw err;
    }
};
exports.default = validateBody;
