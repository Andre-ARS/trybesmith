"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const validations_1 = require("../validations");
class OrderService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const { orderModel } = this;
            const orders = yield orderModel.findAll();
            return orders;
        });
        this.create = (productsIds, userId) => __awaiter(this, void 0, void 0, function* () {
            const { orderModel, productModel } = this;
            (0, validations_1.ordersValidation)({ productsIds });
            const orderId = yield orderModel.create(userId);
            yield productsIds.forEach((product) => __awaiter(this, void 0, void 0, function* () {
                yield productModel.update(orderId, product);
            }));
            return { userId, productsIds };
        });
        this.orderModel = new models_1.OrderModel(models_1.connection);
        this.productModel = new models_1.ProductModel(models_1.connection);
    }
}
exports.default = OrderService;
