import { useState, useEffect } from 'react';

import './App.css';
import DisplayStudentInfo from './components/views/DisplayStudentInfo';
import Search from './components/views/Search';

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  const [nameFilter, setNameFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.hatchways.io/assessment/students'
      );
      const data = await response.json();
      
      const studentsWithAverage = data.students.map((student) => {
        let totalPoints = student.grades.reduce((acc, value) => {
          return acc + +value;
        }, 0);
        let average = totalPoints / student.grades.length;
        average = average.toFixed(2);
       
        return { ...student, average, tags: [] };
      });
      setStudents(studentsWithAverage);
      setFilteredStudents(studentsWithAverage);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setFilteredStudents(
      students.filter((student) => {
        return (
          student.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student.lastName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student.lastName.toLowerCase().includes(nameFilter.toLowerCase())
        );
      })
    );
  }, [nameFilter, students]);

  useEffect(() => { 
    setFilteredStudents(
      students.filter((student) => {
        console.log(student.tags.join('').includes(tagFilter))
        return student.tags.join('').toLowerCase().includes(tagFilter.toLowerCase());
      })
    )
  }, [tagFilter, students]);

  const update = (t, index) => {
    setTags(t);
    setStudents(
      students.map((student, i) => {
       
        if (i === index) {
          console.log(student, tags);
          return { ...student, tags };
        } else {
          return student;
        }
      })
    );
    console.log(students);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Search
          id={'name-input'}
          placeholder='Search Name'
           setFilter={(e) => setNameFilter(e.target.value)}
        />
      </header>
      {loading && <div className='loading'>Now Loading</div>}

      <DisplayStudentInfo students={filteredStudents} updateStudents={update} />
    </div>
  );
};

export default App;
