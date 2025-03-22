import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteBooks = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const book = await prisma.book.delete({ 
            where: { id: id }
             });

         res.json({ message: "Book deleted successfully", book})
    } catch (error) {
        res.status(500).json({ message: "Error deleting book", error: (error as any).message });
    }
}