import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import contactIcon from './images/contact_calender.svg';
import exploreIcon from './images/explore.svg';
import heartIcon from './images/heart.svg';

const Card = ({ ...props }) => {
  if (props.cardType === 'create-card')
    return (
      <div className={styles[props.cardType]}>
        <Button
          width='10rem'
          height='10rem'
          radius='50%'
          bg='#7EDA8B'
          text='+'
          ftsize='5rem'
        ></Button>
        <span className={styles['create-card-span']}>새로운 모임 만들기</span>
      </div>
    );

  if (props.cardType === 'detail-card')
    return (
      <div className={styles[props.cardType]}>
        <div className={styles['detail-tags']}>
          {props.tags.map((tag) => {
            const hashTag = `#${tag}`;
            return (
              <Button
                height='3rem'
                radius='25px'
                ftsize='1rem'
                text={hashTag}
                bg='F3F5F8'
                color='666666'
                style={{
                  flexBasis: 'content',
                  padding: '0 1rem',
                  margin: '0.2rem 0.5rem',
                }}
              ></Button>
            );
          })}
        </div>

        <div className={styles['detail-card-div']}>
          <img src={contactIcon} />
          <span>{'33'}명</span>
        </div>

        <div className={styles['detail-card-div']}>
          <img src={exploreIcon} />
          <span>{'위치'}</span>
        </div>

        <div className={styles['detail-card-buttons']}>
          <Button
            width='26rem'
            height='6rem'
            border='1px solid #7EDA8B'
            color='#7EDA8B'
            text='모집중'
            radius='140px'
            bg='#ffffff'
            flexBasis='center'
          ></Button>
          <Button
            width='26rem'
            height='6rem'
            border='1px solid #7EDA8B'
            color='#666666'
            text='참가 신청'
            radius='140px'
            flexBasis='center'
          ></Button>
        </div>
      </div>
    );

  if (props.cardType === 'recruit-card')
    return <div className={styles[props.cardType]}></div>;
};
export default Card;
