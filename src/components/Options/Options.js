import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from '../Options/Options.module.css';

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonsBlock}>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
Options.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
