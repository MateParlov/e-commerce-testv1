import React from 'react';

import styles from './PreviewCollection.module.scss';

const PreviewCollection = () => {
  return (
    <div className={styles.PreviewCollection}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.preview}></div>
    </div>
  );
};
