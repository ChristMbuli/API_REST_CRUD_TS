"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    cover: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Book = mongoose_1.default.model("Book", BookSchema);
exports.default = Book;
