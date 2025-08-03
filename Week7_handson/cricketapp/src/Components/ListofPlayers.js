import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Kohli', score: 90 },
    { name: 'Dhoni', score: 65 },
    { name: 'Rohit', score: 75 },
    { name: 'Rahul', score: 45 },
    { name: 'Gill', score: 85 },
    { name: 'Hardik', score: 50 },
    { name: 'Jadeja', score: 95 },
    { name: 'Shami', score: 60 },
    { name: 'Ashwin', score: 70 },
    { name: 'Bumrah', score: 68 },
    { name: 'Surya', score: 55 }
  ];

  const filtered = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players Scored Below 70</h2>
      <ul>
        {filtered.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
