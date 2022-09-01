"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const { name, message, details } = err;
    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'InvalidData':
            res.status(401).json({ message });
            break;
        case 'Unprocessable':
            res.status(422).json({ message });
            break;
        default:
            res.status(500).json({ message });
    }
    next();
};
exports.default = errorHandler;
