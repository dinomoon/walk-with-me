const { Schema } = require('mongoose');

const PostSchema = new Schema(
  {
    _id: ObjectId,
    author: {
      type: ObjectId,
      ref: 'UserSchema',
      required: true,
    },
    title: {
      type: String,
      min: 1,
      max: 100,
      required: true,
    },
    image: [String],
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
    // [94, 96]
    age: [Number],
    members: [
      {
        type: ObjectId,
        ref: 'UserSchema',
      },
    ],
    chatting: [
      {
        type: ObjectId,
        ref: 'ChatSchema',
      },
    ],
    likesCount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    isRecruit: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
