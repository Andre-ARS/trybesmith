"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = exports.OrderController = exports.UserController = exports.ProductController = void 0;
const authController_1 = __importDefault(require("./authController"));
exports.AuthController = authController_1.default;
const orderController_1 = __importDefault(require("./orderController"));
exports.OrderController = orderController_1.default;
const productController_1 = __importDefault(require("./productController"));
exports.ProductController = productController_1.default;
const userController_1 = __importDefault(require("./userController"));
exports.UserController = userController_1.default;
