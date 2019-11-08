import React from 'react';
import { connect } from 'react-redux';

import PreviewCollection from './PreviewCollection/PreviewCollection';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = props => {
  const { collections, category } = props;

  let collection = collections.filter(
    collection => collection.routeName === category
  );

  // if category is nonexisting it will render default shop page with
  // preview of all categories
  if (collection.length === 0) {
    collection = collections.map(collection => {
      return <PreviewCollection key={collection.id} {...collection} show={4} />;
    });
  } else {
    collection = <PreviewCollection {...collection[0]} show={50} />;
  }

  return <React.Fragment>{collection}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    collections: selectShopCollections(state)
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
