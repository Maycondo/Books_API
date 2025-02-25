import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const postBooks = async (req: Request, res: Response) => {
    try {
        const { title, author, categories, description, imageUrl } = req.body;

        if (!title || !author || !Array.isArray(categories) || !description ) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const book = await Prisma.book.create({
            data: {
                title,
                author,
                categories,
                description,
                imageUrl
            }
        });
        
        return res.status(201).json(book);
    } catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({ 
            message: "Error creating book" , 
            error: error instanceof Error ? error.message : String(error) });
        } finally {
            await Prisma.$disconnect();
        }
}