const Course = require("../models/Course");
class SiteController {
  //GET /
  async index(req, res) {
    try {
      const data = await Course.find({});
      if (data) {
        res.json(data);
      }
    } catch (error) {
      res.status(400).json({ error: "ERROR!" });
    }
  }

  //GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
