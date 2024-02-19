import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ProfileList } from './components/studentlist/studentlist.component'
import { CourseList } from './components/courselist/courselist.component'


function App() {
  
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios (
        '/api/students/',
      );
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios (
        '/api/courses/',
      );
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const [studentID, setStudentID] = useState("");

  const handleChange = (e) => {
    setStudentID(e.target.value);
  };

  return(
    <div className="App">
      <CourseList courses = {courses} />
      <ProfileList students = {students} />
      <select onChange={handleChange}>
        <option value="Select Student">Select Student</option>
        {students.map((student) => <option value={student.studentID}>{student.firstName} {student.lastName}</option>)}
        </select>
      
    </div>
  );

}

export default App;
