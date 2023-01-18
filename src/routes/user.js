const express = require('express');
const userSchema = require('../models/user.js');

const router = express.Router();

router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

module.exports = router;