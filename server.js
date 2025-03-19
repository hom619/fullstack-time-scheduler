import express from "express";
import taskRouter from "./src/routers/taskRouter.js";
const app = express();
const PORT = 8000;
import morgan from "morgan";
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
