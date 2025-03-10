import React from 'react';

const SvgWrapper = ({ width = 24, height = 24, viewBox = '0 0 24 24', style={}, children }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >{children}</svg>
  );
}

export default SvgWrapper;