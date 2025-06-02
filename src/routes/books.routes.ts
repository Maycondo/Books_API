import { getBooks } from "../controllers/get-books";
import { postBooks } from "../controllers/post-books";
import { getBooksId } from "../controllers/get-books-id";
import { putBooks } from "../controllers/put-books-id";
import { deleteBooks } from "../controllers/delete-books-id";
import express from 'express';
const router = express.Router();

router.get("/Books", async (req, res) => {
    getBooks(req, res);
});     

router.get("/:id", (req, res) => {
    getBooksId(req, res);
})

router.post("/Bookadd", async (req, res) => {
    postBooks(req, res);
});

router.put("/edit:id", async (req, res) => {
    putBooks(req, res);
});

router.delete("/delete:id", async (req, res) => {
    deleteBooks(req, res);
});


export default router;
