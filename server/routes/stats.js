const router = require('express').Router();


router.route('/').get((req, res) => {
  res.json({ message: 'Stats API is working' });
});

module.exports = router;