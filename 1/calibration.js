"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\r\n');
const firstNumberRegex = /^[a-zA-Z]*(\d)/;
const lastNumberRegex = /(\d)[a-zA-Z]*$/;
const calibration = wordList.map(word => {
    var _a, _b;
    const firstMatch = word.match(firstNumberRegex);
    const lastMatch = word.match(lastNumberRegex);
    return +((_a = firstMatch === null || firstMatch === void 0 ? void 0 : firstMatch[1]) !== null && _a !== void 0 ? _a : 0) * 10 + +((_b = lastMatch === null || lastMatch === void 0 ? void 0 : lastMatch[1]) !== null && _b !== void 0 ? _b : 0);
});
console.log(calibration.reduce((prev, curr) => prev + curr, 0));
