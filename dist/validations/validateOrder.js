"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateBody = (order) => {
    const schema = joi_1.default.object({
        productsIds: joi_1.default.array().items(joi_1.default.number()).min(1).required()
            .messages({
            'number.base': '"productsIds" must include only numbers',
            'array.min': '"productsIds" must include only numbers',
        }),
    });
    const { error } = schema.validate(order);
    if (error && error.message.includes('required'))
        throw error;
    if (error) {
        const err = new Error(error.message);
        err.name = 'Unprocessable';
        throw err;
    }
};
exports.default = validateBody;
