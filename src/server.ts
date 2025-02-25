import express from "express";
import { getBooks } from "./controllers/get-books/get-books";
import { postBooks } from "./controllers/post-books/post-books";

const app = express();

app.use(express.json());

app.post("Livros", async (req, res) => {
    postBooks(req, res);
});

app.get("/Livros", async (req, res) => {
    getBooks(req, res);
});


const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})