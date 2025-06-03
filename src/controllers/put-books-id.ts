import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const putBooks = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "ID do livro não fornecido." });
  }

  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Campo 'description' é obrigatório." });
  }

  try {
    const existingBook = await Prisma.book.findUnique({ where: { id } });

    if (!existingBook) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }

    const book = await Prisma.book.update({
      where: { id },
      data: { description },
    });

    return res.status(200).json(book);
  } catch (error) {
    console.error("Erro ao atualizar livro:", error);
    return res.status(500).json({
      message: "Erro interno no servidor",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
