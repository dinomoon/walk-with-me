exports.getPost = (req, res) => {
  res.status(200).json({ success: '특정 포스트' });
};

exports.getPosts = (req, res) => {
  const queryObj = req.query;
  if (Object.keys(queryObj).length === 0) {
    res.status(200).json({ success: '포스트 목록' });
    return;
  }
  res.status(200).json({ success: '포스트 필터링' });
};

exports.registerPost = (req, res) => {
  res.status(200).json({ success: '포스트 등록' });
};

exports.editPost = (req, res) => {
  res.status(200).json({ success: '포스트 수정' });
};

exports.deletePost = (req, res) => {
  res.status(200).json({ success: '포스트 삭제' });
};

exports.addLikes = (req, res) => {
  res.status(200).json({ success: '관심 등록' });
};

exports.deleteLikes = (req, res) => {
  res.status(200).json({ success: '관심 해제' });
};
