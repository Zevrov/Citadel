const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  matchId: { type: String, required: true, unique: true },
  map: { type: String, required: true },
  gameMode: { type: String, required: true },
  duration: { type: Number, required: true }, // in seconds
  players: [{
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    team: { type: String, enum: ['A', 'B'] },
    kills: { type: Number, default: 0 },
    deaths: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    weapons: [{ type: String }]
  }],
  winningTeam: { type: String, enum: ['A', 'B'] },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);