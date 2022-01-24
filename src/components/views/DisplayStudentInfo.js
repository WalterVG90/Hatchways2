import React from 'react'
import Card from './Card'

const DisplayStudentInfo = (props) => {
  return (
    <div className='students'>

      {props.students.map((student,index) => {
        return (
          <Card students={props.students} student={student} index={index} updateStudents={props.updateStudents} />
        )
        })
      }

    </div>
  )
}

export default DisplayStudentInfo
