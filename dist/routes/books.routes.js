"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_books_1 = require("../controllers/get-books");
const post_books_1 = require("../controllers/post-books");
const get_books_id_1 = require("../controllers/get-books-id");
const put_books_id_1 = require("../controllers/put-books-id");
const delete_books_id_1 = require("../controllers/delete-books-id");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/Books", async (req, res) => {
    (0, get_books_1.getBooks)(req, res);
});
router.get("/:id", (req, res) => {
    (0, get_books_id_1.getBooksId)(req, res);
});
router.post("/Bookadd", async (req, res) => {
    (0, post_books_1.postBooks)(req, res);
});
router.put("/update:id", async (req, res) => {
    (0, put_books_id_1.putBooks)(req, res);
});
router.delete("/delete:id", async (req, res) => {
    (0, delete_books_id_1.deleteBooks)(req, res);
});
exports.default = router;
