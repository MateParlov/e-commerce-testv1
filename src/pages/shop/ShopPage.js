import React from 'react';
import styles from './ShopPage.module.scss';
import PropTypes from 'prop-types';
//component imports
import CollectionsOverview from '../../components/collectionOverview/CollectionsOverview';

const ShopPage = props => {
  const { category } = props.match.params;
  return (
    <div className={styles.ShopPage}>
      <CollectionsOverview category={category} />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ShopPage;
