const express = require('express');
const userSchema = require('../models/user.js');

const router = express.Router();

// create a user

router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

// get all user

router.get("/user", (req, res) => {
  userSchema
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

// get a user

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

module.exports = router;