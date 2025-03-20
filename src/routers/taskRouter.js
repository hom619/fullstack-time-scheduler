import express from "express";
import {
  deleteTask,
  getTasks,
  insertTask,
  updateTask,
} from "./models/TaskSchema.js";
const router = express.Router();
//database table selecting

router.post("/", async (req, res, next) => {
  try {
    //insert task
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "New task has been added successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
router.get("/", async (req, res, next) => {
  const tasks = await getTasks();
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks,
  });
});
router.patch("/", async (req, res, next) => {
  const { _id, ...rest } = req.body;
  const result = await updateTask(_id, rest);
  res.json({
    status: "success",
    message: "Your task has been updated",
    result,
  });
});
router.delete("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const result = await deleteTask(_id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});
export default router;
