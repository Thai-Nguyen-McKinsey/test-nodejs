var express = require('express');
var router = express.Router();



// host: 'c-cosmo-postgres.soovqyprdlutqz.postgres.cosmos.azure.com port=5432 dbname=citus user=citus password=P@ssword123456 sslmode=require',
const { Pool } = require('pg')
const client = new Pool({
  user: 'citus',
  host: 'c-cosmo-postgres.soovqyprdlutqz.postgres.cosmos.azure.com',
  database: 'citus',
  password: 'P@ssword123456',
  port: 5432,
  ssl: true
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
    client.query('SELECT * FROM item;', (err, result) => {
      console.log(result)
      console.log('after res')
      res.render('index', { title: 'Express new title', items: result.rows });
      // client.end();
    })
});


router.get('/abc', (req, res) => {
  res.json({ id: 213, description: "ifoas dasdhoi asdoas 'dasdasdh lasdsad", message: 'Hello, World!' });
});

module.exports = router;
