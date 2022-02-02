const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    min: 1,
    max: 100,
    required: true,
  },
  image: Buffer,
  content: {
    type: String,
    min: 0,
    max: 500,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  members: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  preMembers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  likeCount: {
    type: Number,
    default: 0,
  },
  likeMembers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  category: {
    type: String,
    required: true,
  },
});

module.exports = PostSchema;
