import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

// Function for getting random color in HEX format
// Source: https://css-tricks.com/snippets/javascript/random-hex-color/

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.statistics}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id} // уникальный ключ id
            className={styles.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.defaultProps = {
  title: '', //
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
