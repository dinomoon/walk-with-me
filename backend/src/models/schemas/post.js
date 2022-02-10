const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    isRecruiting: {
      type: Boolean,
      default: true,
    },
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
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
