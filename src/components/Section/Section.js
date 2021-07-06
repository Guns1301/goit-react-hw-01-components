import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

import styles from './Section.module.css';

const Section = ({ type, children }) => (
  <section className={styles[type]}>
    <Container>{children}</Container>
  </section>
);

Section.defaultProps = {
  type: 'plain',
};

Section.propTypes = {
  type: PropTypes.oneOf(['plain', 'highlighted']),
  children: PropTypes.node,
};

export default Section;
