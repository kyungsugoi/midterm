import React from "react";
import Table from 'react-bootstrap/Table';


export const CourseList = ({ courses }) => (
    <div className="courselist">
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>department</th>
            <th>time</th>
            <th>size</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return(
                <tr>
                <td>{course.courseID}</td>
                <td>{course.courseName}</td>
                <td>{course.departmentID.departmentName}</td>
                <td>{course.time}</td>
                <td>{course.size}</td>
                </tr>
            )})}
        </tbody>
      </Table>
    </div>
    
);