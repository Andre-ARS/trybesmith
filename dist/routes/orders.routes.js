"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const ordersRoute = (0, express_1.Router)();
const orderController = new controllers_1.OrderController();
ordersRoute.get('/', orderController.findAll);
ordersRoute.use(middlewares_1.tokenValidation);
ordersRoute.post('/', orderController.create);
ordersRoute.use(middlewares_1.errorHandler);
exports.default = ordersRoute;
