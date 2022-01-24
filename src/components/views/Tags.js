import React from 'react';
import './Tags.css';
const Tags = (props) => {
  return (
    <div className='tags'>
      {props.student.tags.map((tag, index) => {
        return (
          <h3 className='tag' key={index}>
            {tag}{' '}
          </h3>
        );
      })}
    </div>
  );
};

export default Tags;
