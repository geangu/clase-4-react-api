const Course = require('../models/Course');

const create = async (req, res) => {
  try {
    const { name, description, photo, price } = req.body;
    const course = new Course({ name, description, photo, price });
    await course.save();
    res.send({
      course,
    });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const read = async (req, res) => {
  try {
    const id = req.query.id;

    const courses = await Course.find({});
    res.send({ courses });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findOne({ id: id });

    if (!course) {
      res.status(404).send({
        code: 404,
        message: 'Not found',
      });
    }

    res.send({ course });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findOne({ id: id });

    if (!course) {
      res.status(404).send({
        code: 404,
        message: 'Not found',
      });
    }

    const { name, description } = req.body;

    course.name = name;
    course.description = description;

    await course.save();

    res.send({ course });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const drop = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findOne({ id: id });

    if (!course) {
      res.status(404).send({
        code: 404,
        message: 'Not found',
      });
    }

    await course.delete();

    res.send({ course });
  } catch (e) {
    res.send({ error: e.message });
  }
};

module.exports = {
  create,
  read,
  update,
  drop,
  findById,
};
