import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import contact from './images/contact_calender.svg';
import explore from './images/explore.svg';
import heartRed from './images/heart_red.svg';
import heartGray from './images/heart_gray.svg';

const Card = ({ cardType, style, content }) => {
  const {
    like,
    pic,
    likes,
    loc,
    tags,
    memCount,
    image,
    title,
    subTitle,
    name,
    profile,
  } = content;
  if (cardType === 'create-card')
    return (
      <div
        style={style}
        className={`${styles['card']} ${styles['create-card']}`}
      >
        <Button
          width='10rem'
          height='10rem'
          radius='50%'
          bg='#7EDA8B'
          text='+'
          ftsize='5rem'
        />
        <span className={styles['create-card-span']}>새로운 모임 만들기</span>
      </div>
    );

  if (cardType === 'detail-card')
    return (
      <div
        style={style}
        className={`${styles['card']} ${styles['detail-card']}`}
      >
        <div className={styles['detail-tags']}>
          {tags.map((tag) => {
            const hashTag = `#${tag}`;
            return (
              <Button
                height='3rem'
                radius='25px'
                ftsize='1.2rem'
                text={hashTag}
                bg='#F3F5F8'
                color='#666666'
              />
            );
          })}
        </div>
        <div className={styles['detail-text-div']}>
          <div className={styles['detail-text']}>
            <img src={contact} />
            <span>{memCount}명</span>
          </div>

          <div className={styles['detail-text']}>
            <img src={explore} />
            <span>{loc}</span>
          </div>
        </div>
        <div className={styles['detail-buttons-middle']}>
          <Button
            width='26rem'
            height='6rem'
            border='1px solid #7EDA8B'
            color='#7EDA8B'
            text='모집중'
            radius='140px'
            bg='#ffffff'
          />
          <Button
            width='26rem'
            height='6rem'
            color='#666666'
            text='참가 신청'
            radius='140px'
            bg='#B2F2BB'
          />
        </div>

        <div className={styles['detail-buttons-bottom']}>
          <div className={styles['likes-people']}>
            <Button width='9rem' height='3rem' bg='#ffffff' cursor='default'>
              {pic.map((p, idx) => {
                if (idx < 3) return <img src={p} />;
              })}
            </Button>
          </div>

          <Button
            width='10rem'
            height='4.6rem'
            border='1px solid #dddddd'
            color='#666666'
            radius='140px'
            flexBasis='center'
            bg='#ffffff'
            text={likes}
            ftsize='1.6rem'
          >
            {like === true ? <img src={heartRed} /> : <img src={heartGray} />}
          </Button>
        </div>
      </div>
    );

  if (cardType === 'recruit-card')
    return (
      <div
        style={style}
        className={`${styles['card']} ${styles['recruit-card']}`}
      >
        <img src={image} className={styles['recruit-img']} />
        <div className={styles['recruit-text']}>
          <div className={styles['recruit-tags']}>
            tags
            {
              <Button
                height='1.7rem'
                radius='25px'
                ftsize='1.2rem'
                text='ssss'
                bg='#ffffff'
                color='#7EDA8B'
                border='#7EDA8B solid 1px'
                style={{
                  flexBasis: 'content',
                  padding: '1rem',
                }}
              />
            }
          </div>
          <span className={styles['recruit-title']}>{title}</span>
          <span className={styles['recruit-subtitle']}>{subTitle}</span>
        </div>
      </div>
    );
};

Card.defaultProps = {
  cardType: 'create',
  content: {
    like: false,
    pic: [],
    likes: 0,
    loc: '위치 없음',
    tags: [],
    memCount: 0,
    image: '',
    title: '',
    subTitle: '',
    name: '',
    profile: '',
  },
};

export default Card;
