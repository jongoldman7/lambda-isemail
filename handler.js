'use strict';

const isemail = require('isemail');
const Validator = require('./validator');

let validator = new Validator(isemail);

module.exports.isemail = (event, context, callback) => {

  if ( event.email ) {
    validator.do(event.email, {dns: true, errorLevel: true}, function (err, result) {
        if (err) {
          callback(null, {result: false});
        } else {
          callback(null, {result: true});
        }
    })
  } else {
    callback('Email is required');
  }
};
