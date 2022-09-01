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
class ProductService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const { model } = this;
            const result = yield model.findAll();
            return result;
        });
        this.create = (product) => __awaiter(this, void 0, void 0, function* () {
            const { model } = this;
            (0, validations_1.productsValidation)(product);
            const result = yield model.create(product);
            return result;
        });
        this.model = new models_1.ProductModel(models_1.connection);
    }
}
exports.default = ProductService;
