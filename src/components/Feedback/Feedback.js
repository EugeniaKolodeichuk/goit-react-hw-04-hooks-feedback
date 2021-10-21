import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Feedback;
