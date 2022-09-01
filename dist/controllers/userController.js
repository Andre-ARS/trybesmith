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
class UserController {
    constructor(userService = new services_1.UserService()) {
        this.userService = userService;
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userService } = this;
            const user = req.body;
            const token = yield userService.create(user);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ token });
        });
    }
}
exports.default = UserController;
