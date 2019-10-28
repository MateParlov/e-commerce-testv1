import React, { Component } from 'react';
import SHOP_DATA from '../../dbData/shopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import styles from './ShopPage.module.scss';
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className={styles.ShopPage}>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
