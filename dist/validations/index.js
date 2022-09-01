"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersValidation = exports.usersValidation = exports.productsValidation = exports.validateLogin = exports.validateBody = void 0;
const validateLogin_1 = require("./validateLogin");
Object.defineProperty(exports, "validateBody", { enumerable: true, get: function () { return validateLogin_1.validateBody; } });
Object.defineProperty(exports, "validateLogin", { enumerable: true, get: function () { return validateLogin_1.validateLogin; } });
const validateProducts_1 = __importDefault(require("./validateProducts"));
exports.productsValidation = validateProducts_1.default;
const validateUser_1 = __importDefault(require("./validateUser"));
exports.usersValidation = validateUser_1.default;
const validateOrder_1 = __importDefault(require("./validateOrder"));
exports.ordersValidation = validateOrder_1.default;
