const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  //Create /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST /courses/store
  store(req, res, next) {
    const fromData = req.body;
    fromData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
    const course = new Course(fromData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CourseController();
