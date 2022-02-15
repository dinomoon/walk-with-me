import CardCreate from './CardCreate';
import CardRecruit from './CardRecruit';
import CardDetail from './CardDetail';
import React from 'react';

const Card = ({ style, post, cardType }) => {
  if (cardType === 'create') return <CardCreate style={style} />;

  if (!post) {
    return <CardCreate style={style} load={true} />;
  }

  let { age, area, author, likeMembers, category } = post;
  if (!author) author = { nickname: '이름없음', profileImage: '사진없음' };
  if (!likeMembers && Array.isArray(likeMembers)) likeMembers = [];

  const tags = [`#${area}`, `#${age}대`, `#${category}`];

  if (cardType === 'recruit') {
    const newPost = {
      ...post,
      tags,
      author,
      likes: likeMembers.length,
      like: false,
    };
    return <CardRecruit style={style} post={newPost} />;
  }

  if (cardType === 'detail') {
    // const getImage = async (userId) => {
    //   const response = await fetch(
    //     `http://localhost:4000/api/auth/${userId}/profile-image`
    //   );
    //   const blobImg = await response.blob();
    //   return URL.createObjectURL(blobImg);
    // };
    // const piccc = likeMembers.slice(0, 3).map((userId) => {
    //   return getImage(userId);
    // });
    // console.log('pic: ', piccc);
    const pic = likeMembers.slice(0, 3);
    const newPost = {
      ...post,
      tags,
      pic,
      author,
      likeMembers,
      like: false,
    };
    return <CardDetail style={style} post={newPost} />;
  }
};
export default Card;
