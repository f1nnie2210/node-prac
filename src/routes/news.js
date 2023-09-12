const express = require("express");
const routes = express.Router();

const newsController = require("../app/controllers/NewsController");

routes.get("/:slug", newsController.show);
routes.get("/", newsController.index);

module.exports = routes;
