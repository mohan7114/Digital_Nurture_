import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div>
      <h2> Blog Posts</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <b>{blog.title}</b> — {blog.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
