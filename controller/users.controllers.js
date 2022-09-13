const getUsers = (req, res) => {
  res.status(200).send("All users");
}
const getUser = (req, res) => {
  res.status(200).send("Get user");
}
const createUser = (req, res) => {
  res.status(200).send("Save user");
}
const updateUser = (req, res) => {
  res.status(200).send("Update user");
}
const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
}

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
};