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
class OrderModel {
    constructor(connection) {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p
      ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId;`;
            const [orders] = yield connection.execute(query);
            return orders;
        });
        this.create = (userId) => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const query = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?);`;
            const [{ insertId }] = yield connection.execute(query, [userId]);
            return insertId;
        });
        this.connection = connection;
    }
}
exports.default = OrderModel;
