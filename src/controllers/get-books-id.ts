
import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express';

export const getBooksId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const prisma = new PrismaClient();

    try {
        const book = await prisma.book.findUnique({
            where: {
                id: id,
            },
        });

        res.json({ book });
    } catch (error) {
        res.status(404).json({ message: "Book not found" });
    }
}