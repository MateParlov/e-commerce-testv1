import React from 'react';
import styles from './PreviewCollection.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//components imports
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = props => {
  const { title, items, show, routeName } = props;
  console.log(props);
  return (
    <div className={styles.PreviewCollection}>
      <Link to={`/shop/${routeName}`} className={styles.title}>
        {title.toUpperCase()}
      </Link>
      <div className={styles.preview}>
        {items
          .map(item => <CollectionItem key={item.id} item={item} />)
          .splice(0, show)}
      </div>
    </div>
  );
};

PreviewCollection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  routeName: PropTypes.string.isRequired,
  show: PropTypes.number.isRequired
};

export default PreviewCollection;
