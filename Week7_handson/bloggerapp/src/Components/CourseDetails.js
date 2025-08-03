import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2> Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <b>{course.name}</b> - Duration: {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
