import { Router } from "express";
import * as booksController from '../controllers/booksController.js';

const router = Router();

router.get("/", booksController.getAllBooks);
router.get("/search/:query", booksController.getExternalBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.addBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

export default router;
