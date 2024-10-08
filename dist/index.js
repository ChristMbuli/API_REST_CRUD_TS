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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const bookRoute_js_1 = __importDefault(require("./routes/bookRoute.js"));
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const DATABASE_URL = "mongodb+srv://christmb017:s4CRuSlfVfmo2YEC@cluster0.pwv1w.mongodb.net/crud_ts?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(DATABASE_URL, {
    dbName: "crud_ts",
}).then(() => {
    console.log("MongoDB is connected!");
}).catch((error) => {
    console.log(error);
});
app.use("/api/book", bookRoute_js_1.default);
app.listen(9000, () => {
    console.log("Server is running!");
});
