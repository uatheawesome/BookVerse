import { Router } from "express";
import booksUrls from "./booksRoutes.js";

const router = Router();

router.use("/books", booksUrls)

export default router