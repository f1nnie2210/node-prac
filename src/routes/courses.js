const express = require("express");
const routes = express.Router();

const courseController = require("../app/controllers/CourseConTroller");

routes.get("/create", courseController.create);
routes.post("/store", courseController.store);
routes.get("/:slug", courseController.show);

module.exports = routes;
