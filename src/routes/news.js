const express = require("express");
const routes = express.Router();

const newsController = require("../app/controllers/NewsController");

routes.use("/:slug", newsController.show);
routes.use("/", newsController.index);

module.exports = routes;
