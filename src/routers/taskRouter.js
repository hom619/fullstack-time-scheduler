import express from "express";
import mongoose from "mongoose";
const router = express.Router();

//database table selecting

const taskSchema = new mongoose.Schema({}, { strict: false });
const TaskCollection = mongoose.model("Task", taskSchema);
router.post("/", async (req, res, next) => {
  //insert task
  const result = await TaskCollection(req.body).save();
  console.log(result);
  res.json({
    status: "success",
    message: "New task has been added successfully",
  });
});
router.get("/", async (req, res, next) => {
  const tasks = await TaskCollection.find();
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks,
  });
});
router.patch("/", async (req, res, next) => {
  const { _id, ...rest } = req.body;
  const result = await TaskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
  res.json({
    status: "success",
    message: "Your task has been updated",
    result,
  });
});
router.delete("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const result = await TaskCollection.findByIdAndDelete(_id);
  res.json({
    status: "success",
    message: "Your task has been deleted",
    result,
  });
});
export default router;
