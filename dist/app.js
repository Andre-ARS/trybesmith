"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerFile_1 = __importDefault(require("./swaggerFile"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerFile_1.default));
app.use(express_1.default.json());
app.use(routes_1.default);
exports.default = app;
