import React, { useState } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const books = [
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'Deep Work', author: 'Cal Newport' },
  ];

  const blogs = [
    { title: 'React Basics', content: 'Learn about JSX, components, and state.' },
    { title: 'React Hooks', content: 'Understand useState and useEffect.' },
  ];

  const courses = [
    { name: 'React Bootcamp', duration: '6 weeks' },
    { name: 'JavaScript Mastery', duration: '4 weeks' },
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1> Blogger Dashboard</h1>
      <div>
        <button onClick={() => setShowBooks(true)}>Show Books</button>
        <button onClick={() => setShowBlogs(true)}>Show Blogs</button>
        <button onClick={() => setShowCourses(true)}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional Rendering Techniques */}
      {showBooks && <BookDetails books={books} />}
      {showBlogs ? <BlogDetails blogs={blogs} /> : null}
      {showCourses && <CourseDetails courses={courses} />}
    </div>
  );
}

export default App;
