const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  totalMatches: { type: Number, default: 0 },
  totalWins: { type: Number, default: 0 },
  totalKills: { type: Number, default: 0 },
  totalDeaths: { type: Number, default: 0 },
  favoriteWeapon: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', playerSchema);