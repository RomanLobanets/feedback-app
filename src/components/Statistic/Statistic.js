import React from 'react';
import styles from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistic}>
    <ul className={styles.statistic_list}>
      <li className={styles.statistic_list_item}>good: {good}</li>
      <li className={styles.statistic_list_item}>neutral: {neutral}</li>
      <li className={styles.statistic_list_item}>bad: {bad}</li>
      <li className={styles.statistic_list_item}>Total: {total}</li>
      <li className={styles.statistic_list_item}>
        Positive feeedback: {positivePercentage} %
      </li>
    </ul>
  </div>
);

export default Statistics;
