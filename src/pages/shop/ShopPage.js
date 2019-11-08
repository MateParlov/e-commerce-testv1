import React from 'react';
import styles from './ShopPage.module.scss';

import CollectionsOverview from '../../components/collectionOverview/CollectionsOverview';

const ShopPage = props => {
  const { category } = props.match.params;
  console.log(props);
  return (
    <div className={styles.ShopPage}>
      <CollectionsOverview category={category} />
    </div>
  );
};

export default ShopPage;
