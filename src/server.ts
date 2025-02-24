import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const Prisma = new PrismaClient();

app.use(express.json());


app.get("/Livros", async (req, res) => {
    res.json({ message: "Hello World" });

});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})