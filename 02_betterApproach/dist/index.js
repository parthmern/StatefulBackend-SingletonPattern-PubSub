"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameManager_1 = __importDefault(require("./GameManager"));
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    GameManager_1.default.addGame({
        id: Math.random().toString(),
        "whitePlayer": "parth",
        "blackPlayer": "patel",
        moves: []
    });
}, 5000);
