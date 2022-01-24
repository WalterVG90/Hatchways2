import React from 'react';

import './../Card.css';

const Dash = (props) => {
 
    return (
      // DASH
      <svg
        fill={props.fill}
        width={props.width}
        height={props.height}
        className={props.className}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M19 13H5v-2h14v2z' />
      </svg>
    );
  }

export default Dash;
