const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Player = require('./models/player');
const Match = require('./models/match');
const Weapon = require('./models/weapon');
const Map = require('./models/map');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI.replace('<DB_PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const statsRouter = require('./routes/stats');
app.use('/api/stats', statsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});