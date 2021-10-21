import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ title, message }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{message}</p>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
