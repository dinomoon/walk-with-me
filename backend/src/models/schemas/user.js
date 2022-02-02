const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    max: 50,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  nickname: {
    type: String,
    min: 2,
    max: 10,
  },
  profileImage: Buffer,
  gender: String,
  birthYear: Number,
  area: String,
  bio: [
    {
      _id: mongoose.Types.ObjectId,
      text: {
        type: String,
        min: 2,
        max: 100,
        default: '',
      },
    },
  ],
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

module.exports = UserSchema;
