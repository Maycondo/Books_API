import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const putBooks = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const { title, author, description, categories, imageUrl } = req.body;

        if (!title || !author || !description || !Array.isArray(categories)) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const book = await Prisma.book.update({
            where: { id },
            data: {
                title,
                author,
                description,
                categories,
                imageUrl: imageUrl || null,
            }
        });

        return res.status(200).json(book);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : String(error),
        })
    } finally {
        await Prisma.$disconnect();
    }
};
