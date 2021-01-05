const express = require('express');
const router = express.Router();
const db = require("../config/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  const customers = db.findCustomers();
  console.log(customers);
  res.render('index', { title: 'Express' });
});

module.exports = router;
