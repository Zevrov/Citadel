const router = require('express').Router();

// Dummy data
const dummyStats = {
  totalGames: 1000,
  activePlayers: 250,
  topScores: [
    { username: 'player1', score: 10000 },
    { username: 'player2', score: 9500 },
    { username: 'player3', score: 9000 },
  ],
  recentMatches: [
    { id: 1, winner: 'player1', loser: 'player2', date: '2023-04-15' },
    { id: 2, winner: 'player3', loser: 'player1', date: '2023-04-14' },
    { id: 3, winner: 'player2', loser: 'player3', date: '2023-04-13' },
  ]
};

// Get all stats
router.get('/', (req, res) => {
  res.json(dummyStats);
});

// Get top scores
router.get('/top-scores', (req, res) => {
  res.json(dummyStats.topScores);
});

// Get recent matches
router.get('/recent-matches', (req, res) => {
  res.json(dummyStats.recentMatches);
});

module.exports = router;