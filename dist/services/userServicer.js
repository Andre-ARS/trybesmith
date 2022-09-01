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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const validations_1 = require("../validations");
const tokenService_1 = __importDefault(require("./tokenService"));
class UserService {
    constructor() {
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { model, tokenService } = this;
            (0, validations_1.usersValidation)(user);
            const result = yield model.create(user);
            if (result)
                return tokenService.createToken(result);
        });
        this.model = new models_1.UserModel(models_1.connection);
        this.tokenService = new tokenService_1.default();
    }
}
exports.default = UserService;
