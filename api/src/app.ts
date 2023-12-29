import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("common"));

app.listen(port, () => {
  console.log(`Application is available at http://localhost:${port}`);
});
