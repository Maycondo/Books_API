import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); // Inicializa o Prisma Client
import { Request, Response } from 'express';

export const getBooks = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
    // ❌ Nada de disconnect aqui!
};
