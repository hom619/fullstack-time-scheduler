import express from "express";
const router = express.Router();
router.post("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "New task has been added successfully",
  });
});
router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Here are the task list",
    tasks: [],
  });
});
router.patch("/", (req, res, next) => {
  const { id, type } = req.body;
  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});
export default router;
