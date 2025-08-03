import React from 'react';

function IndianPlayers() {
  const team = ['Rohit', 'Kohli', 'Gill', 'Rahul', 'Surya', 'Hardik', 'Jadeja', 'Ashwin', 'Shami', 'Bumrah', 'Dhoni'];
  
  // Destructuring
  const [odd1, odd2, odd3, odd4, odd5, , , , , , odd6] = team;
  const [ , even1, , even2, , even3, , even4, , even5] = team;

  const T20players = ['Kohli', 'Rohit', 'Gill'];
  const RanjiTrophy = ['Jadeja', 'Shreyas', 'Ishan'];

  // Merging arrays
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
        <li>{odd4}</li>
        <li>{odd5}</li>
        <li>{odd6}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
        <li>{even4}</li>
        <li>{even5}</li>
      </ul>

      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
