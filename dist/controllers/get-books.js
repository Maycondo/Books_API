"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // Inicializa o Prisma Client
const getBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany({
            select: {
                id: true,
                title: true,
                author: true,
                categories: true,
                description: true,
                imageUrl: true,
                rating: true,
            },
        });
        res.json(books);
    }
    catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
    // ❌ Nada de disconnect aqui!
};
exports.getBooks = getBooks;
