import { useState, useRef, useEffect } from 'react';

import './Card.css';

import Plus from './icon/Plus';
import Dash from './icon/Dash';
import Tags from './Tags';

const Card = (props) => {
  const { student, index, updateStudents} = props;
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [tags, setTags] = useState(student.tags);
  const [newTag, setNewTag] = useState('');
  const [hasTags, setHasTags] = useState(tags ? true : false);

  const content = useRef(null);

  const toggleAccordian = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );

    console.log(content.current.scrollHeight);
    console.log(setActive);
  };

  const testScoresHTML = student.grades.reduce((acc, value, index) => {
    value = `<p>Test ${index + 1}: ${value}%</p>`;
    return acc + value;
  }, '');

  const submitNewTagHandler = (e) => {
    e.preventDefault();
    setHasTags(true);
    console.log(tags);
    setHeightState(
       `${content.current.scrollHeight}px`
    );
    setTags([...tags, newTag]);
    updateStudents(tags, index);
    setNewTag('');
  };

useEffect(() => {
  
},[student])

  return (
    <div className='accordian'>
      <div className='student-card' key={index}>
        <img
          className='student-card__img'
          src={student.pic}
          alt='student pic'
        />
        <div className='details'>
          <h2 className='name'>{student.firstName + ' ' + student.lastName}</h2>
          <p>
            <strong>Email: </strong>
            {student.email}
          </p>
          <p>
            <strong>Skill: </strong>
            {student.skill}
          </p>
          <p>
            <strong>Average: </strong>
            {student.average}%
          </p>

          {/* ACCORDION */}
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className='accordian__content'
          >
            <div
              className='accordian__content'
              dangerouslySetInnerHTML={{ __html: testScoresHTML }}
            />
            <div className='accordian__content'>
              {hasTags && <Tags student={student} />}

              <form onSubmit={submitNewTagHandler}>
                <input
                  className='​add-tag-input​'
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  type='text'
                  placeholder='Add a new tag'
                />
              </form>
            </div>
          </div>
        </div>

        <button className='expand-btn' onClick={toggleAccordian}>
          {!setActive ? (
            <Plus width={'30'} fill={'#777'} />
          ) : (
            <Dash width={'30'} fill={'#777'} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
