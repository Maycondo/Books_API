import { getBooks } from "../controllers/get-books";
import { postBooks } from "../controllers/post-books";
import { getBooksId } from "../controllers/get-books-id";
import { putBooks } from "../controllers/put-books-id";
import { deleteBooks } from "../controllers/delete-books-id";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/Books", async (req: Request, res: Response) => {
  getBooks(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  getBooksId(req, res);
});

router.post("/Bookadd", async (req: Request, res: Response) => {
  postBooks(req, res);
});

router.put("/update:id", async (req: Request, res: Response) => {
  putBooks(req, res);
});

router.delete("/delete:id", async (req: Request, res: Response) => {
  deleteBooks(req, res);
});

export default router;
