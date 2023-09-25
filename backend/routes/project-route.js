const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
} = require("../controllers/projects-controller");

router.route("/").get(getAllProjects).post(createProject);
router.route("/:id").get(getProject).delete(deleteProject).patch(updateProject);

module.exports = router;
