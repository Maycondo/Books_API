import { getBooks } from "../controllers/get-books";
import { postBooks } from "../controllers/post-books";
import { getBooksId } from "../controllers/get-books-id";
import express from 'express';
const router = express.Router();

router.get("/Books", async (req, res) => {
    getBooks(req, res);
});     

router.get("/:id", (req, res) => {
    getBooksId(req, res);
})

router.post("/books", async (req, res) => {
    postBooks(req, res);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
})

export default router;
