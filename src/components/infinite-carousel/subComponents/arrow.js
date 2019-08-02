import React from 'react';

const Arrow = ({ position, handleClick }) => (
  <img
    className={`arrow ${position === 'left' ? '' : 'mirror'}`}
    src={require('../../../assets/arrow.png')}
    alt="foo"
    width={100}
    onClick={handleClick}
  />
);

export default Arrow;
