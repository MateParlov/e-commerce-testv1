import React from 'react';

import styles from './PreviewCollection.module.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = props => {
  const { title, items, show } = props;

  return (
    <div className={styles.PreviewCollection}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .map(item => <CollectionItem key={item.id} item={item} />)
          .splice(0, show)}
      </div>
    </div>
  );
};

export default PreviewCollection;
