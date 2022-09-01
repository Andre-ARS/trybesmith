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
class ProductModel {
    constructor(connection) {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const query = 'SELECT * FROM Trybesmith.Products;';
            const [products] = yield connection.execute(query);
            return products;
        });
        this.create = (product) => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const { name, amount } = product;
            const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);`;
            const [{ insertId: id }] = yield connection.execute(query, [name, amount]);
            return Object.assign({ id }, product);
        });
        this.update = (orderId, productId) => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const query = `UPDATE Trybesmith.Products SET orderId = ?
      WHERE id = ?;`;
            yield connection.execute(query, [orderId, productId]);
        });
        this.connection = connection;
    }
}
exports.default = ProductModel;
