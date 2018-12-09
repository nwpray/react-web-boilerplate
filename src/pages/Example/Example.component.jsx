import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ example, example2, onClick, onSagaClick }) => (
  <div>
    <h1>React Web Boilerplate</h1>

    <p>Press the buttons to increment their count</p>

    <button type="button" onClick={onClick}>
      <span>Redux only button </span>
      {example}
    </button>

    <button type="button" onClick={onSagaClick}>
      <span>Saga button </span>
      {example2}
    </button>

    <p>Open the developer console to watch redux actions being dispatched</p>
  </div>
);

Example.propTypes = {
  example: PropTypes.number,
  example2: PropTypes.number,
  onClick: PropTypes.func,
  onSagaClick: PropTypes.func
};

Example.defaultProps = {
  example: 0,
  example2: 0,
  onClick: null,
  onSagaClick: null
};

export default Example;
