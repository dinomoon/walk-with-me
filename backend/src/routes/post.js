const { Router } = require('express');
const {
  getPost,
  getPosts,
  registerPost,
  editPost,
  deletePost,
  addLikes,
  deleteLikes,
} = require('../controllers/post');

const router = Router();

// 특정 포스트
router.get('/:id', getPost);

// 목록, 등록, 수정, 삭제
router.get('/', getPosts);
router.post('/', registerPost);
router.put('/:id', editPost);
router.delete('/:id', deletePost);

// 관심 등록, 해제
router.post('/:id/likes', addLikes);
router.delete('/:id/likes', deleteLikes);

module.exports = router;
