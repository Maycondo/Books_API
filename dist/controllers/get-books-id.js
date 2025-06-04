"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksId = void 0;
const client_1 = require("@prisma/client");
const getBooksId = async (req, res) => {
    const { id } = req.params;
    const prisma = new client_1.PrismaClient();
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: id,
            },
        });
        res.json({ book });
    }
    catch (error) {
        res.status(404).json({ message: "Book not found" });
    }
};
exports.getBooksId = getBooksId;
