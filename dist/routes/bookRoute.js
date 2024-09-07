"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_js_1 = require("../controllers/bookController.js");
const router = express_1.default.Router();
router.get("/", bookController_js_1.getAllBooks);
router.get("/:id", bookController_js_1.getBookById);
router.put("/update/:id", bookController_js_1.updateBook);
router.delete("/delete/:id", bookController_js_1.deleteBook);
router.post("/new", bookController_js_1.newBook);
exports.default = router;
