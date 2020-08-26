import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={styles.notification}>{message}</div>
);
export default Notification;
