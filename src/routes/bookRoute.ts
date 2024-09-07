import express from 'express';
import { deleteBook, getAllBooks, getBookById, newBook, updateBook } from '../controllers/bookController.js';

const router = express.Router()

router.get("/", getAllBooks)
router.get("/:id", getBookById)
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)
router.post("/new", newBook)

export default router
