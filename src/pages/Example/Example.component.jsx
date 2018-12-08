import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ example, onClick }) => (
  <div>
    <h1>React Web Boilerplate</h1>

    <p>Press the button to increment the count</p>

    <button type="button" onClick={onClick}>
      {example}
    </button>

    <p>Open the developer console to watch redux actions being dispatched</p>
  </div>
);

Example.propTypes = {
  example: PropTypes.string,
  onClick: PropTypes.func
};

Example.defaultProps = {
  example: 'Default Example Value',
  onClick: null
};

export default Example;
