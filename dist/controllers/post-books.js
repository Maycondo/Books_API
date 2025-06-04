"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // uso de letra minúscula por convenção
const postBooks = async (req, res) => {
    try {
        const { title, author, categories, description, imageUrl, rating } = req.body;
        if (!title || !author || !Array.isArray(categories) || !description) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const book = await prisma.book.create({
            data: {
                title,
                author,
                categories,
                description,
                imageUrl: imageUrl || null,
                rating: rating || null,
            }
        });
        return res.status(201).json(book);
    }
    catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({
            message: "Error creating book",
            error: error instanceof Error ? error.message : String(error)
        });
    }
    // ❌ NÃO chame prisma.$disconnect() aqui
};
exports.postBooks = postBooks;
