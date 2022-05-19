import React from 'react';
import { Image } from 'antd';
import styles from './error.module.sass';

const Error = () => {
  return (
    <div className={styles.container}>
      <Image width={600} src='/error.png' alt='error' />
    </div>
  );
};

export default Error;
