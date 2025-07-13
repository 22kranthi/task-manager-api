const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
  console.log("getting All the tasks");
  const task = await Task.find();
  res.status(200).json(task);
};

const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ mesg: "Task not found" });
  res.status(200).json(task);
};

const createTask = async (req, res) => {
  console.log("posting the data");
  const { title, description, completed } = req.body;
  const task = new Task({ title, description, completed });
  await task.save();
  res.status(201).json(task);
};

const updateTaskById = async (req, res) => {
  const { title, description, completed } = req.body;
  const id = req.params.id;
  const task = await Task.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true }
  );
  if (!task) {
    return res.status(404).json({ msg: "task Not Found" });
  }
  res.json(task);
};

const deleteTaskById = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ msg: "Not Found" });
  }
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
