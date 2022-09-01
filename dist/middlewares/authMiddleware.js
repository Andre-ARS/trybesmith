"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const tokenService = new services_1.TokenService();
const tokenValidation = (req, _res, next) => {
    const { authorization } = req.headers;
    const user = tokenService.validateToken(authorization);
    req.user = user;
    next();
};
exports.default = tokenValidation;
