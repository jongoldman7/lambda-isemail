'use strict'

class Validator {
  
  constructor(validator){
    this.validator = validator;
  }

  do(email, options, callback){
    options = options || {};

    if (typeof options === 'function') {
        callback = options;
        options = {};
    }

    if (typeof callback !== 'function') {
        callback = null;
    }

    // Convert options to format expected by isemail.validate()
    var opts = {
        errorLevel: true
    };

    return this.validator.validate(email, opts, function(result) {
        if (callback) {
            if (result <= (options.errorLevel||0)) {
                callback(null, result);
            } else {
                callback(new Error("Invalid email"), result);
            }
        }
    });
  }
}

module.exports = Validator;