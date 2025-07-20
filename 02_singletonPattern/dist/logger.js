"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const GameManager_1 = __importDefault(require("./GameManager"));
function startLogger() {
    setInterval(() => {
        GameManager_1.default.logState();
    }, 3000);
}
