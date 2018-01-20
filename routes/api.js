const express = require('express');
const router = express.Router();

// For testing sever connection
router.get('/test', (req, res) => {
  res.send({ message: 'Server is working!' });
})

module.exports = router;
