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

// update a user

router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {name, age, email} })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

// delete a user

router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
});

module.exports = router;