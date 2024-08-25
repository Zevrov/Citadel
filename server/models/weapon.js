const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  totalKills: { type: Number, default: 0 },
  totalUsage: { type: Number, default: 0 },
  averageDamage: { type: Number, default: 0 }
});

module.exports = mongoose.model('Weapon', weaponSchema);