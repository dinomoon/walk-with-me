exports.getPost = (req, res) => {
  res.json({
    success: req.params,
  });
};

exports.getPosts = (req, res) => {
  console.log(req.query);
  res.json({
    success: 'hello',
  });
};

exports.registerPost = (req, res) => {
  res.json({
    success: req.body,
  });
};

exports.editPost = (req, res) => {
  res.json({
    success: 'hello',
  });
};

exports.deletePost = (req, res) => {
  res.json({
    success: 'hello',
  });
};

exports.addLikes = (req, res) => {
  res.json({
    success: '관심 등록',
  });
};

exports.deleteLikes = (req, res) => {
  res.json({
    success: '관심 해제',
  });
};
