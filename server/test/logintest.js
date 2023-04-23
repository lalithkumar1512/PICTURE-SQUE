const assert = require('assert');
const login = require('../../Picture-sque/src/Pages/Login/login_test');

describe('Login', function() {
  describe('#authenticate()', function() {
    it('should return true if the username and password are valid', function() {
      assert.equal(login.authenticate('lalithkumar.g20@iiits.in', 'password123'), true);
    });

    it('should return false if the username is invalid', function() {
      assert.equal(login.authenticate('invalidusername', 'password123'), false);
    });

    it('should return false if the password is invalid', function() {
      assert.equal(login.authenticate('lalithkumar.g20@iiits.in', ''), false);
    });
  });
});
