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
const http_status_codes_1 = require("http-status-codes");
const services_1 = require("../services");
class ProductController {
    constructor(productService = new services_1.ProductService()) {
        this.productService = productService;
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const { productService } = this;
            const products = yield productService.findAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(products);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { productService } = this;
            const product = req.body;
            const newProduct = yield productService.create(product);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(newProduct);
        });
    }
}
exports.default = ProductController;
