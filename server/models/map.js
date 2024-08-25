const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  totalMatches: { type: Number, default: 0 },
  averageDuration: { type: Number, default: 0 }, // in seconds
  mostUsedWeapon: { type: String },
  winRateTeamA: { type: Number, default: 0 }, // percentage
  winRateTeamB: { type: Number, default: 0 } // percentage
});

module.exports = mongoose.model('Map', mapSchema);