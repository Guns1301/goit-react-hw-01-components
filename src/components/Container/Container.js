// один файл - один компонент
// компонент это JavaScript-функция с очень простым контрактом: функция получает объект свойств который называется props и возвращает дерево React-элементов.

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
