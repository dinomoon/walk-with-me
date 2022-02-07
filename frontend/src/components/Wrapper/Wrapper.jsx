import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper = ({ width, height, display, justifyContent }) => {
  return (
    <div
      style={{ width, height, display, justifyContent }}
      className={styles.wrapper}
    ></div>
  );
};
export default Wrapper;
