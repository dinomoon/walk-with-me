const { Schema } = require('mongoose');

const UserSchema = Schema({
  isAdmin: {
    type: Boolean,
    default: false,
  },
  nickname: {
    type: String,
    min: 2,
    max: 10,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    min: 2,
    max: 100,
    default: '',
  },
  email: {
    type: String,
    max: 50,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  profileUrl: {
    type: String,
    required: false,
  },
  likes: [
    {
      type: ObjectId,
      ref: 'PostSchema',
    },
  ],
});

module.exports = UserSchema;
