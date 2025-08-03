import React from 'react';
import './App.css';
import office from './Office.jpg'
function App() {
  const heading = <h1 style={{ textAlign: "center", color: "darkblue" }}>🏢 Office Space Rental</h1>;

  const officeImage = office;

  const singleOffice = {
    name: "Skyline Tower",
    rent: 55000,
    address: "MG Road, Bengaluru"
  };

  const officeList = [
    { name: "Skyline Tower", rent: 55000, address: "MG Road, Bengaluru" },
    { name: "Orchid Plaza", rent: 62000, address: "HSR Layout, Bengaluru" },
    { name: "GreenTech Hub", rent: 47000, address: "Whitefield, Bengaluru" },
    { name: "Tech Park One", rent: 70000, address: "Manyata Tech Park, Bengaluru" }
  ];

  return (
    <div className="App" style={{ padding: "20px" }}>
      {heading}

      <img 
        src={officeImage} 
        alt="Office Space" 
        width="500" 
        height="300" 
        style={{ display: "block", margin: "20px auto", borderRadius: "10px" }} 
      />

      <h2>Featured Office</h2>
      <p><b>Name:</b> {singleOffice.name}</p>
      <p><b>Rent:</b> <span style={{ color: singleOffice.rent < 60000 ? 'red' : 'green' }}>{singleOffice.rent}</span></p>
      <p><b>Address:</b> {singleOffice.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <p><b>Name:</b> {office.name}</p>
          <p><b>Rent:</b> <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>{office.rent}</span></p>
          <p><b>Address:</b> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
