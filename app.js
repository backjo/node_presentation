var express = require('express');
var request = require('supertest');
var should = require('should');
var app = express();

app.get('/user', function(req, res) {
  res.json({name: 'tobi'});
});

app.get('/', function(req, res) {

});

app.listen('3000', function(err) {
  request(app)
    .get('/user')
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect(200)
    .end(function(err, res) {
      console.log(err);
      res.body.should.have.property("name", "tobi");
    })
});
//Unit tests
