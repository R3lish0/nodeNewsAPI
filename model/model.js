const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("Data", dataSchema)
