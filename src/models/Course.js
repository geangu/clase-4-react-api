const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CourseSchema = Schema({
  name: { type: String },
  description: { type: String },
  photo: { type: String },
  price: { type: Number },
  created: { type: Date, default: Date.now },
});

const Course = model('course', CourseSchema);

module.exports = Course;
