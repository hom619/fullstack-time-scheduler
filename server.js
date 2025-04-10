import express from "express";
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
const PORT = 8000;
import morgan from "morgan";
//Connect MongoDB
import { connectMongoDB } from "./config/db.config.js";
connectMongoDB();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);
// static servering
import path from "path";
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
