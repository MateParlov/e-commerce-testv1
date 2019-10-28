import React from 'react';

import styles from './PreviewCollection.module.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = props => {
  const { title, items } = props;
  return (
    <div className={styles.PreviewCollection}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .map(({ id, ...itemProps }) => (
            <CollectionItem id={id} {...itemProps} />
          ))
          .splice(0, 4)}
      </div>
    </div>
  );
};

export default PreviewCollection;
