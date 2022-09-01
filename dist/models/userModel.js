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
class UserModel {
    constructor(connection) {
        this.findUser = (userInfo) => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const values = [userInfo.username, userInfo.password];
            const query = `SELECT * FROM Trybesmith.Users
      WHERE username = ?
      AND password = ?;`;
            const [user] = yield connection.execute(query, values);
            return user;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { connection } = this;
            const { username, classe, level, password } = user;
            const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
            const [{ insertId: id }] = yield connection
                .execute(query, [username, classe, level, password]);
            return Object.assign({ id }, user);
        });
        this.connection = connection;
    }
}
exports.default = UserModel;
