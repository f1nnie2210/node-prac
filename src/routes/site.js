const express = require("express");
const routes = express.Router();

const siteController = require("../app/controllers/SiteController");

routes.get("/search", siteController.search);
routes.get("/", siteController.index);

module.exports = routes;
