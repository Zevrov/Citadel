import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stats.css';

function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stats')
      .then(response => {
        console.log('API response:', response.data);
        setStats(response.data);
      })
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  if (!stats || !stats.topScores || !stats.recentMatches) {
    return <div>Loading or error occurred...</div>;
  }

  console.log('Current stats:', stats);

  return (
    <div className="stats-container">
      <h1>Game Stats</h1>
      
      <h2>General Stats</h2>
      <table>
        <tbody>
          <tr>
            <th>Total Games</th>
            <td>{stats.totalGames}</td>
          </tr>
          <tr>
            <th>Active Players</th>
            <td>{stats.activePlayers}</td>
          </tr>
        </tbody>
      </table>

      <h2>Top Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {stats.topScores.map((score, index) => (
            <tr key={index}>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Recent Matches</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Winner</th>
            <th>Loser</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {stats.recentMatches.map((match) => (
            <tr key={match.id}>
              <td>{match.id}</td>
              <td>{match.winner}</td>
              <td>{match.loser}</td>
              <td>{match.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;