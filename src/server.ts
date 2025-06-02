import express from "express";
import router from "./routes/books.routes";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
