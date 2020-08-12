const express = require("express");
const helmet = require("helmet");

const UserRouter = require("../users/user-router.js");
const db = require("../data/db-config.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", UserRouter);
server.get("/api/posts", (req, res) => {
  db("posts as p")
    .leftJoin("users as u", "p.user_id", "u.id")
    .select("p.contents as Quote", "u.username as Author")
    .then((posts) => {
      res.status(200).json({ data: posts });
    });
});

module.exports = server;
