const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    min: 2,
    max: 10,
  },
  profileImgURL: String,
  gender: String,
  birthYear: Number,
  area: String,
  likePosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    },
  ],
  applyPosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    },
  ],
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
  joinedPosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    },
  ],
  snsId: Number,
  provider: String
});

// UserSchema.methods.generateToken = function () {
//   const token = jwt.sign(
//     {
//       _id: this.id,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.EXPIRE_TIME,
//     }
//   );
//   return token;
// };

UserSchema.methods.deleteApplyPost = async function (postId) {
  this.applyPosts = this.applyPosts.filter(
    (applyPostId) => applyPostId.toString() !== postId.toString()
  );

  this.bio = this.bio.filter(
    (post) => post._id.toString() !== postId.toString()
  );

  await this.save();
};

module.exports = UserSchema;
