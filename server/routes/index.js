var express = require('express')
var router = express.Router()

var pgOpt = require('pg');
var pgConfig = {
  user: 'postgres',
  database: 'postgres',
  password: 'KAxa5WZSRx6nD',
  host: 'vis.cdyoue.com',
  port: '5432',
  client_encoding: 'utf8',
  poolSize: 5,
  poolIdleTimeout: 30000,
  reapIntervalMillis: 10000
};
var pgPool = new pgOpt.Pool(pgConfig);

pgPool.connect(function (isErr, client, done) {
  if (isErr) {
    console.log('connect query:' + isErr.message);
    return;
  }
  client.query("select * from guixi_form_1_73 where home= '南晶国际'", [], function (isErr, rst) {
    done();
    if (isErr) {
      console.log(isErr)
    } else {
      router.get('/person', function(req, res, next){
        res.json(rst.rows)
      });
    }
  })
});

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

module.exports = router
