"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const node_fetch_1 = __importDefault(require("node-fetch"));
axios_1.default
    .get("https://httpstat.us/429")
    .then()
    .catch((err) => console.log({ err: err.message }));
// the fetch API is available in node from version 17.5
(0, node_fetch_1.default)("https://httpstat.us/429")
    .then()
    .catch((err) => console.log({ err: err.message }));
