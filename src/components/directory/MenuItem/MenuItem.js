import React from 'react';
import styles from './MenuItem.module.scss';
import { withRouter } from 'react-router-dom';
const MenuItem = props => {
  const { title, imageUrl, size, match, linkUrl } = props;

  return (
    <div
      className={styles.menuItem + ' ' + styles[size]}
      onClick={() => {
        props.history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop now</span>
      </div>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
    </div>
  );
};

export default withRouter(MenuItem);
