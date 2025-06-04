"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteBooks = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await prisma.book.delete({
            where: { id } // id permanece como string
        });
        res.json({ message: "Book deleted successfully", book });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting book",
            error: error.message
        });
    }
};
exports.deleteBooks = deleteBooks;
