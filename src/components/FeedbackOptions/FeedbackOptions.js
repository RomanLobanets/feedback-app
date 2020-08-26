import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick }) => (
  <div className={styles.btn_container}>
    <button
      className={styles.btn}
      type="button"
      onClick={() => onClick('good')}
    >
      good
    </button>
    <button
      className={styles.btn}
      type="button"
      onClick={() => onClick('neutral')}
    >
      neutral
    </button>
    <button className={styles.btn} type="button" onClick={() => onClick('bad')}>
      bad
    </button>
  </div>
);
export default FeedbackOptions;
