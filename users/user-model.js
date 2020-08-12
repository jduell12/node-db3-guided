const db = require("../data/db-config.js");

//CRUD for users

module.exports = {
  getUsers,
  getUserById,
  addUser,
  editUser,
  removeUser,
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id }).first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .returning("id")
    .then((ids) => {
      const id = ids[0];
      return getUserById(id);
    });
}

function editUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count) {
        return getUserById(id);
      } else {
        return count;
      }
    });
}

function removeUser(id) {
  return db("users").where({ id }).del();
}
