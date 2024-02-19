import React from "react";
import Table from 'react-bootstrap/Table';

export const ProfileList = ({ students }) => (
    <div className="profilelist">
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>enrolled in</th>
          </tr>
        </thead>
        <tbody>
          {students.map( (student) => {
            return(
                <tr>
                <td>{student.studentID}</td>
                <td>{student.lastName}, {student.firstName}</td>
                <td>{student.email}</td>
                <td>{student.courses.map(course => <div className="courses">{course.courseName}, {course.time}</div>)}</td>
                </tr>
            )})}
        </tbody>
      </Table>
    </div>
);