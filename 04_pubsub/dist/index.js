"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = __importDefault(require("./PubSubManager"));
setInterval(() => {
    PubSubManager_1.default.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
