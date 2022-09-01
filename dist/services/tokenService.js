"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
class TokenService {
    constructor() {
        this.createToken = (user) => {
            const { secret } = this;
            const jwtConfig = {
                expiresIn: '15m',
                algorithm: 'HS256',
            };
            const token = jsonwebtoken_1.default.sign({ data: user }, secret, jwtConfig);
            return token;
        };
        this.validateToken = (token) => {
            try {
                const { secret } = this;
                if (!token)
                    throw new Error('Token not found');
                const { data: user } = jsonwebtoken_1.default.verify(token, secret);
                return user;
            }
            catch (error) {
                error.name = 'InvalidData';
                if (error.message.includes('jwt malformed')) {
                    error.message = 'Invalid token';
                }
                throw error;
            }
        };
        this.secret = process.env.MY_SECRET || 'password';
    }
}
exports.default = TokenService;
