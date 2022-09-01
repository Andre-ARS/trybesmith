"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateBody = (product) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(3).required(),
        amount: joi_1.default.string().min(3).required(),
    });
    const { error } = schema.validate(product);
    if (error && error.message.includes('required'))
        throw error;
    if (error) {
        const err = new Error(error.message);
        err.name = 'Unprocessable';
        throw err;
    }
};
exports.default = validateBody;
