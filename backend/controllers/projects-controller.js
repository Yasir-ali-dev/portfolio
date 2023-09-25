const getAllProjects = (req, res) => {
  res.send("all projects");
};

const createProject = (req, res) => {
  res.send("creating a project");
};
const getProject = (req, res) => {
  res.send("getting an specific project");
};

const updateProject = (req, res) => {
  res.send("updatting project ");
};

const deleteProject = (req, res) => {
  res.send("deleted project");
};

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
};
