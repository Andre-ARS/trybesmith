"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_routes_1 = __importDefault(require("./login.routes"));
const orders_routes_1 = __importDefault(require("./orders.routes"));
const products_routes_1 = __importDefault(require("./products.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const router = (0, express_1.Router)();
router.use('/login', login_routes_1.default);
router.use('/products', products_routes_1.default);
router.use('/users', users_routes_1.default);
router.use('/orders', orders_routes_1.default);
exports.default = router;
