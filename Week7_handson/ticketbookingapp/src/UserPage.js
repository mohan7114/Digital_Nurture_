import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>Here are the available flight details:</p>
      <ul>
        <li>Flight: AI 202 | Delhi ➜ Mumbai | 10:30 AM</li>
        <li>Flight: AI 308 | Bengaluru ➜ Chennai | 1:15 PM</li>
        <li>Flight: AI 505 | Hyderabad ➜ Kolkata | 5:45 PM</li>
      </ul>
      <p>You can proceed to book your tickets.</p>
    </div>
  );
}

export default UserPage;
